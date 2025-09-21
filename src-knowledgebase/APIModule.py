import json
import sys
import os
import numpy as np
from PySide6.QtCore import Qt, Signal, QTimer
from PySide6.QtWidgets import (QApplication, QFrame, QHBoxLayout, QTableWidgetItem, QGridLayout, QAbstractItemView,
                               QRadioButton, QButtonGroup, QDockWidget)
from qfluentwidgets import (NavigationItemPosition, setTheme, Theme, FluentWindow,
                            SubtitleLabel, setFont, PushButton, LineEdit,
                            TableWidget, TableItemDelegate, SmoothScrollArea, ListView)

from qfluentwidgets import FluentIcon as FIF
from matplotlib.backends.backend_qtagg import FigureCanvasQTAgg as FigureCanvas
from matplotlib.figure import Figure
from qbstyles import mpl_style
from PySide6.QtWidgets import (QFileDialog, QLabel, QDockWidget,QProgressDialog)
from PySide6.QtGui import QFont
import pandas as pd
from qfluentwidgets import (ComboBox, LineEdit, ListWidget, PushButton,
    TableWidget, CheckBox)
from PySide6.QtWidgets import QVBoxLayout, QWidget, QListWidgetItem, QListWidget, QCompleter, QScrollArea, QCheckBox, QMessageBox
from PySide6.QtGui import QColor
from matplotlib.offsetbox import AnchoredText
import pandas as pd
import requests
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from konlpy.tag import Kkma, Hannanum # 형태소 분석 라이브러리
import threading
from SPARQLWrapper import SPARQLWrapper2, JSON, RDF
from werkzeug.serving import make_server
from rdflib import Graph,URIRef, Namespace, Literal, XSD

kkma = Kkma()
hannanum = Hannanum()

korean_stopwords_path = "korean_stopwords.txt"
# 불용어 데이터 불러오기
with open(korean_stopwords_path,"r", encoding='utf-8') as f:
    stopwords = f.readlines()
stopwords = [x.strip() for x in stopwords]

app = Flask(__name__)

@app.route('/suresoft/search', methods=['POST'])
def search():
    # 요청 데이터 로그 출력
    print(f"Raw request data: {request.data}")
    print(f"Request content type: {request.content_type}")
    
    # POST 요청으로부터 데이터 받아오기
    data = request.get_json()
    username = data.get('content', '')
    
    if not username:
        return jsonify({"error": "Username not provided"})
    
    Act_sparql = SPARQLWrapper2("http://localhost:3030/7Layer/sparql")

    nouns = hannanum.nouns(username)
    if not nouns:
        nouns = [username]

    keyword_str = ', '.join(['"{}"'.format(keyword) for keyword in nouns])
    
    Act_sparql.setQuery("""
        PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
        PREFIX owl: <http://www.w3.org/2002/07/owl#>
        PREFIX ontology: <http://www.semanticweb.org/suresoft/ontologies/2022/3/untitled-ontology-42#>
        PREFIX update: <http://www.act-knowledgebase.org/ontologies/2023/9/update-ontology#>

        SELECT ?subject ?jo_content ?hang_content ?ho_content ?mck_content
        WHERE {
        {
        ?subject update:조_내용 ?jo_content.               
        ?subject update:추출키워드 """+keyword_str+""".

        }
        UNION{
        ?subject update:항_내용 ?hang_content.
        ?subject update:추출키워드 """+keyword_str+""".
        }
        UNION{
        ?subject update:호_내용 ?ho_content.
        ?subject update:추출키워드 """+keyword_str+""".
        }
        UNION{
        ?subject update:목_내용 ?mck_content.
        ?subject update:추출키워드 """+keyword_str+""".
        }
        }
    """)

    result = Act_sparql.query().convert()


    Act_items = []

    for result in Act_sparql.query().bindings:
        if ('jo_content' in result):
            word = ""
            word += result['subject'].value.split('#')[1] + ' :'
            word += result['jo_content'].value
            Act_items.append(word)
        elif ('hang_content' in result):
            word = ""
            word += result['subject'].value.split('#')[1] + ' :'
            word += result['hang_content'].value
            Act_items.append(word)
        elif ('ho_content' in result):
            word = ""
            word += result['subject'].value.split('#')[1] + ' :'
            word += result['ho_content'].value
            Act_items.append(word)
        elif ('mck_content' in result):
            word = ""
            word += result['subject'].value.split('#')[1] + ' :'
            word += result['mck_content'].value
            Act_items.append(word)

    # 로그 데이터를 JSON 파일로 저장
    log_data = {
        "Search_data": username,
        "Related_Acts": Act_items
    }

    return jsonify(log_data)

            
@app.route('/suresoft/update', methods=['POST'])
def update():
    # POST 요청으로부터 데이터 받아오기
    data = request.get_json()
    File_Route = data.get('File', [])
    
    keyword_list = []
    
    Act_sparql = SPARQLWrapper2("http://localhost:3030/7Layer/sparql")
    
    # 1. 현재 Fuseki 서버에서 데이터 가져오기
    select_query = """
    CONSTRUCT { ?s ?p ?o }
    WHERE { ?s ?p ?o }
    """
    
    Act_sparql.setQuery(select_query)
    Act_sparql.setReturnFormat(RDF)  # RDF 포맷으로 설정

    # 기존 데이터 가져오기
    response = Act_sparql.query()
    existing_data = response.convert()  # RDF 형식으로 데이터를 가져옴

    # 2. 기존 데이터 파싱 (기존 RDF 그래프 불러오기)
    graph = Graph()

    # 데이터가 있는 경우, 그래프에 파싱
    try:
        graph.parse(data=existing_data.serialize(format='nt'), format="nt")
    except Exception as e:
        print(f"데이터 파싱 중 오류 발생: {e}")

    # 가져온 데이터가 없을 때 빈 그래프 유지
    if len(graph) > 0:
        print("데이터가 존재합니다.")
    else:
        print("서버에서 가져올 데이터가 없습니다. 빈 그래프를 생성합니다.")

    # if (File_Route[1] != ""):
    #     owlfilepath = File_Route[1].replace("\\", "\\\\")
    #     graph.parse(owlfilepath, format="xml")
    # else:
    #     pass
    
    ns = Namespace("http://www.act-knowledgebase.org/ontologies/2023/9/update-ontology#")

    jang = ""
    jang_contents = ""
    jo = ""
    jo_contents = ""
    hang = ""
    hang_contents = ""
    ho = ""
    ho_contents = ""
    mck = ""
    mck_contents = ""
    mck_list = ""
    mck_list_contents = ""

    filename = File_Route[0]
    if filename:
        try:
            f = open(filename)
            file = filename.split('/')[-1].split('(')[0].replace(' ', '')+"_"
            lines = f.readlines()

        except FileNotFoundError:
            print("파일을 찾을수 없습니다. 파일 경로를 확인해주세요.")
            return jsonify({"message": "File Not Found Error"}), 500
        
        for line in lines:
            # 장 분리
            sentence = line[:-1].split(' <')[0]
            if(sentence == ''):
                continue

            if(sentence[0:7] == "       "):
                for j in range(8, 20):
                    if(sentence[j]==' '):
                        break

                jang = file+sentence[8:j]
                jang_contents = sentence[j+1:]
                jang_contents_keyword = kkma.nouns(jang_contents)
                remove_stopwords = []
                
                # 기존 데이터에서 해당 subject의 모든 트리플 제거
                for s, p, o in graph.triples((ns[jang], None, None)):
                    graph.remove((s, p, o))
                
                # 불용어 제거
                for w in jang_contents_keyword:
                    if w not in stopwords:
                        remove_stopwords.append(w)
                
                # 장 추출 키워드 추가
                for keyword in remove_stopwords:
                    if keyword in keyword_list:
                        continue
                    else:
                        keyword_list.append(keyword)
                    subject = ns[jang]
                    predicate = ns["추출키워드"]
                    Object = Literal(keyword)
                    triple = (subject, predicate, Object)
                    graph.add(triple)


                # 장 내용 추가
                subject = ns[jang]
                predicate = ns["장_제목"]
                Object = Literal(jang_contents)

                triple = (subject, predicate, Object)
                graph.add(triple)
                continue

            # 조 분리
            if(sentence[0] == "제" ):
                hang = ""
                ho = ""
                for j in range(0, 10):
                    if(sentence[j]=='(' or sentence[j]=='삭'):
                        break
                if(sentence[j-1] == " "):
                    continue

                if(jang == ""):
                    jo = file + sentence[1:j]
                else:
                    jo = sentence[1:j]
                jo_contents = sentence[j:]
                jo_title = jo_contents[1:jo_contents.find(')')]
                jo_contents = jo_contents[jo_contents.find(')')+2:]
                jo_contents_keyword = kkma.nouns(jo_contents)
                remove_stopwords = []
                
                    
                # 불용어 제거
                for w in jo_contents_keyword:
                    if w not in stopwords:
                        remove_stopwords.append(w)

                if('①' in jo_contents):
                    index = jo_contents.find('①')
                    hang = "①항"
                    hang_contents = jo_contents[index+2:]
                    hang_contents_keyword = kkma.nouns(hang_contents)
                    remove_stopwordss = []

                    # 기존 데이터에서 해당 subject의 모든 트리플 제거
                    for s, p, o in graph.triples((ns[jang + jo], None, None)):
                        graph.remove((s, p, o))
                        
                    # 기존 데이터에서 해당 subject의 모든 트리플 제거
                    for s, p, o in graph.triples((ns[jang + jo + hang], None, None)):
                        graph.remove((s, p, o))
                    
                    # 불용어 제거
                    for w in hang_contents_keyword:
                        if w not in stopwords:
                            remove_stopwordss.append(w)

                    jo_contents = jo_contents[:index]
                    jo_contents_keyword = kkma.nouns(jo_contents)

                    remove_stopwords = []

                    # 불용어 제거
                    for w in jo_contents_keyword:
                        if w not in stopwords:
                            remove_stopwords.append(w)
                    
                    # 조 제목 추가
                    subject = ns[jang + jo]
                    predicate = ns["조_제목"]
                    Object = Literal(jo_title)

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    # 항 추출 키워드 추가
                    for keyword in remove_stopwordss:
                        subject = ns[jang + jo + hang]
                        predicate = ns["추출키워드"]
                        Object = Literal(keyword)
                        triple = (subject, predicate, Object)
                        graph.add(triple)

                    # 항 내용 추가
                    subject = ns[jang + jo + hang]
                    predicate = ns["항_내용"]
                    Object = Literal(hang_contents)

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    # 조 - 항 관계 추가
                    subject = ns[jang + jo]
                    predicate = ns["조_항_관계"]
                    Object = ns[jang + jo + hang]

                    triple = (subject, predicate, Object)
                    graph.add(triple)
                    
                    # 장 - 조 관계 추가
                    subject = ns[jang]
                    predicate = ns["장_조_관계"]
                    Object = ns[jang + jo]

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    continue
                else:
                    # 기존 데이터에서 해당 subject의 모든 트리플 제거
                    for s, p, o in graph.triples((ns[jang + jo], None, None)):
                        graph.remove((s, p, o))
                        
                    # 조 추출 키워드 추가
                    for keyword in remove_stopwords:
                        subject = ns[jang + jo]
                        predicate = ns["추출키워드"]
                        Object = Literal(keyword)
                        triple = (subject, predicate, Object)
                        graph.add(triple)

                    
                    # 조 제목 추가
                    subject = ns[jang + jo]
                    predicate = ns["조_제목"]
                    Object = Literal(jo_title)

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    # 조 내용 추가
                    subject = ns[jang + jo]
                    predicate = ns["조_내용"]
                    Object = Literal(jo_contents)

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    # 장 - 조 관계 추가
                    subject = ns[jang]
                    predicate = ns["장_조_관계"]
                    Object = ns[jang + jo]

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    continue

            if(sentence[0:2] == "  " and sentence[2] != ' ' and sentence[2] != '['):
                try:
                    if (type(int(sentence[2])) is int):
                        for j in range(2, 10):
                            if(sentence[j] == '.'):
                                break
                        ho = sentence[2:j]+'호'
                        ho_contents = sentence[j+2:]
                        ho_contents_keyword = kkma.nouns(ho_contents)
                        remove_stopwords = []
                        
                        # 기존 데이터에서 해당 subject의 모든 트리플 제거
                        for s, p, o in graph.triples((ns[jang + jo + hang + ho], None, None)):
                            graph.remove((s, p, o))
                            
                        # 불용어 제거
                        for w in ho_contents_keyword:
                            if w not in stopwords:
                                remove_stopwords.append(w)

                        # 호 추출 키워드 추가
                        for keyword in remove_stopwords:
                            subject = ns[jang + jo + hang + ho]
                            predicate = ns["추출키워드"]
                            Object = Literal(keyword)
                
                            triple = (subject, predicate, Object)
                            graph.add(triple)


                        # 호 내용 추가
                        subject = ns[jang + jo + hang + ho]
                        predicate = ns["호_내용"]
                        Object = Literal(ho_contents)
                
                        triple = (subject, predicate, Object)
                        graph.add(triple)

                        if (hang == ""):
                            # 조 - 호 관계 추가
                            subject = ns[jang + jo]
                            predicate = ns["조_호_관계"]
                            Object = ns[jang + jo + ho]

                            triple = (subject, predicate, Object)
                            graph.add(triple)
                        else:
                            # 항 - 호 관계 추가
                            subject = ns[jang + jo + hang]
                            predicate = ns["항_호_관계"]
                            Object = ns[jang + jo + hang + ho]

                            triple = (subject, predicate, Object)
                            graph.add(triple)

                        continue

                except:
                    ho = ""
                    hang = sentence[2]+'항'
                    hang_contents = sentence[4:]
                    hang_contents_keyword = kkma.nouns(hang_contents)
                    remove_stopwords = []
                    
                    # 기존 데이터에서 해당 subject의 모든 트리플 제거
                    for s, p, o in graph.triples((ns[jang + jo + hang], None, None)):
                        graph.remove((s, p, o))

                    # 불용어 제거
                    for w in hang_contents_keyword:
                        if w not in stopwords:
                            remove_stopwords.append(w)

                    # 항 추출 키워드 추가
                    for keyword in remove_stopwords:
                        subject = ns[jang + jo + hang]
                        predicate = ns["추출키워드"]
                        Object = Literal(keyword)
                        triple = (subject, predicate, Object)
                        graph.add(triple)

                    # 항 내용 추가
                    subject = ns[jang + jo + hang]
                    predicate = ns["항_내용"]
                    Object = Literal(hang_contents)

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    # 조 - 항 관계 추가
                    subject = ns[jang + jo]
                    predicate = ns["조_항_관계"]
                    Object = ns[jang + jo + hang]

                    triple = (subject, predicate, Object)
                    graph.add(triple)

                    continue

            if (sentence[0:4] == "    " and sentence[4] != ' ' ):
                mck = sentence[4]+'목'
                mck_contents = sentence[7:]
                mck_contents_keyword = kkma.nouns(mck_contents)
                remove_stopwords = []
                
                # 기존 데이터에서 해당 subject의 모든 트리플 제거
                for s, p, o in graph.triples((ns[jang + jo + hang + ho + mck], None, None)):
                    graph.remove((s, p, o))
                    
                # 불용어 제거
                for w in mck_contents_keyword:
                    if w not in stopwords:
                        remove_stopwords.append(w)

                # 목 추출 키워드 추가
                for keyword in remove_stopwords:
                    subject = ns[jang + jo + hang + ho + mck]
                    predicate = ns["추출키워드"]
                    Object = Literal(keyword)
                    triple = (subject, predicate, Object)
                    graph.add(triple)


                # 목 내용 추가
                subject = ns[jang + jo + hang + ho + mck]
                predicate = ns["목_내용"]
                Object = Literal(mck_contents)

                triple = (subject, predicate, Object)
                graph.add(triple)

                # 호 - 목 관계 추가
                subject = ns[jang + jo + hang + ho]
                predicate = ns["호_목_관계"]
                Object = ns[jang + jo + hang + ho + mck]

                triple = (subject, predicate, Object)
                graph.add(triple)
                
                continue

            if (sentence[0:6] == "      " and sentence[6] != ' ' ):
                mck_list = sentence[6]+')'
                mck_list_contents = sentence[9:]
                mck_list_contents_keyword = kkma.nouns(mck_list_contents)
                remove_stopwords = []
                
                # 기존 데이터에서 해당 subject의 모든 트리플 제거
                for s, p, o in graph.triples((ns[jang + jo + hang + ho + mck + mck_list], None, None)):
                    graph.remove((s, p, o))

                # 불용어 제거
                for w in mck_list_contents_keyword:
                    if w not in stopwords:
                        remove_stopwords.append(w)

                # 목리스트 추출 키워드 추가
                for keyword in remove_stopwords:
                    subject = ns[jang + jo + hang + ho + mck + mck_list]
                    predicate = ns["추출키워드"]
                    Object = Literal(keyword)
                    triple = (subject, predicate, Object)
                    graph.add(triple)

                
                # 목 내용 추가
                subject = ns[jang + jo + hang + ho + mck + mck_list]
                predicate = ns["목_리스트"]
                Object = Literal(mck_list_contents)

                triple = (subject, predicate, Object)
                graph.add(triple)

                # 목 - 목리스트 관계 추가
                subject = ns[jang + jo + hang + ho + mck]
                predicate = ns["목_목리스트_관계"]
                Object = ns[jang + jo + hang + ho + mck + mck_list]

                triple = (subject, predicate, Object)
                graph.add(triple)

                continue
        
        savefilepath = File_Route[1].replace("\\", "\\\\")
        graph.serialize(destination=savefilepath, format='xml')
        
        # Jena Fuseki 서버 SPARQL Update URL 설정
        update_sparql = SPARQLWrapper2("http://localhost:3030/7Layer/update")

        # 1. 기존 데이터 삭제 (전체 데이터셋의 모든 트리플 제거)
        delete_query = """
        DELETE WHERE { ?s ?p ?o }
        """

        update_sparql.setQuery(delete_query)
        #update_sparql.setMethod(POST)
        response = update_sparql.query()
        

        
        # 2. 새로 생성된 OWL 데이터를 Fuseki에 추가
        # 그래프 데이터를 N-Triples 형식으로 직렬화하여 SPARQL Update 쿼리로 변환
        insert_data = graph.serialize(format='nt')

        # SPARQL Update 쿼리로 OWL 데이터를 삽입
        insert_query = f"""
        INSERT DATA {{
        {insert_data}
        }}
        """

        update_sparql.setQuery(insert_query)
        response = update_sparql.query()
        print("새로운 데이터가 추가되었습니다.")
                
        return jsonify({"message": "Routes processed successfully"}), 200

if __name__ == '__main__':
    CORS(app)
    app.run(host='0.0.0.0', port=5000)