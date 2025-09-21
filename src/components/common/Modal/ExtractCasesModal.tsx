// import { ElementType } from '@type/element';
// import { Modal } from './Modal';
// import classNames from 'classnames';
// import { LAYER_LIST } from '@constants/element';

// interface ExtractCasesModalProps {
//   cases: ElementType[];
//   onClose: () => void;
// }

// const LayerTableData = ({
//   layer,
//   className,
//   rowSpan,
// }: {
//   layer: number;
//   className: string;
//   rowSpan: number;
// }) => {
//   return (
//     <td rowSpan={rowSpan} className={classNames('py-1 border', className)}>
//       {`Layer${layer}`}
//       <br />({LAYER_LIST[layer - 1].name})
//     </td>
//   );
// };

// const ExtractCasesModal = ({ cases, onClose }: ExtractCasesModalProps) => {
//   return (
//     <Modal onClose={onClose}>
//       <div className="max-w-[1200px] flex flex-col items-center gap-3 w-[80vw]">
//         <h2 className="text-2xl font-bold">추출 결과</h2>
//         <div className="flex w-full">
//           <table className="table break-keep w-full text-center border border-collapse">
//             <colgroup>
//               <col className="w-1/4" />
//               <col className="w-1/4" />
//               <col className="w-1/4" />
//               <col className="w-1/4" />
//             </colgroup>
//             <tbody>
//               <tr>
//                 <th className="py-1 border bg-slate-50">Layer</th>
//                 <th className="py-1 border bg-slate-50">Depth1</th>
//                 <th className="py-1 border bg-slate-50">Depth2</th>
//                 <th className="py-1 border bg-slate-50">Depth3</th>
//               </tr>
//               {/* LAYER 1 시작 */}
//               <tr>
//                 <LayerTableData layer={1} rowSpan={9} className="bg-red-50" />
//                 <td className="py-1 border bg-red-50" colSpan={3}>
//                   도로 기능과 등급
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" rowSpan={2}>
//                   도로폭
//                 </td>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   차로폭
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   갓길폭
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" rowSpan={3}>
//                   도로기하구조
//                 </td>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   도로선형
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   도로 경사
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   차로 수
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" rowSpan={2}>
//                   도로표면
//                 </td>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   도로 포장
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" colSpan={2}>
//                   노면 상태
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-red-50" colSpan={3}>
//                   도로유형
//                 </td>
//               </tr>

//               {/* LAYER 2 시작 */}

//               <tr>
//                 <LayerTableData
//                   layer={2}
//                   rowSpan={25}
//                   className="bg-orange-50"
//                 />
//                 <td className="py-1 border bg-orange-50" rowSpan={6}>
//                   도로안전시설
//                 </td>
//                 <td className="py-1 border bg-orange-50" rowSpan={3}>
//                   차량방호시설
//                 </td>
//                 <td className="py-1 border bg-orange-50">중앙분리대</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">방호울타리</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">충격흡수시설</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" rowSpan={2}>
//                   조명시설
//                 </td>
//                 <td className="py-1 border bg-orange-50">연속조명</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">국부조명</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   과속방지턱
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">교통관리시설</td>
//                 <td className="py-1 border bg-orange-50">신호기</td>
//                 <td className="py-1 border bg-orange-50">차량 신호</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" rowSpan={9}>
//                   도로표지
//                 </td>
//                 <td className="py-1 border bg-orange-50" rowSpan={4}>
//                   주의표지
//                 </td>
//                 <td className="py-1 border bg-orange-50">도로상태 예고</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">노면상황 예고</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">기상상황 예고</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">기타주의 예고</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" rowSpan={3}>
//                   규제표지
//                 </td>
//                 <td className="py-1 border bg-orange-50">통행금지</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">통행제한</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">금지사항</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" rowSpan={2}>
//                   지시표지
//                 </td>
//                 <td className="py-1 border bg-orange-50">도로지정</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">통행방법</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" rowSpan={5}>
//                   노면표시
//                 </td>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   중앙선
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   차선
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   사전예고 표시
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   안전속도 표시
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   금지구역 표시
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" rowSpan={4}>
//                   운영제약
//                 </td>
//                 <td className="py-1 border bg-orange-50" rowSpan={2}>
//                   제한속도
//                 </td>
//                 <td className="py-1 border bg-orange-50">최고제한속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50">최저 제한속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   보호구역
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-orange-50" colSpan={2}>
//                   전용도로
//                 </td>
//               </tr>

//               {/* LAYER 3 시작 */}

//               <tr>
//                 <LayerTableData
//                   layer={3}
//                   rowSpan={4}
//                   className="bg-yellow-50"
//                 />
//                 <td className="py-1 border bg-yellow-50" rowSpan={4}>
//                   도로점용
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-yellow-50" colSpan={2}>
//                   도로공사
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-yellow-50" colSpan={2}>
//                   선행사고
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-yellow-50" colSpan={2}>
//                   장애물
//                 </td>
//               </tr>

//               {/* LAYER 4 시작 */}

//               <tr>
//                 <LayerTableData
//                   layer={4}
//                   rowSpan={46}
//                   className="bg-green-50"
//                 />
//                 <td className="py-1 border bg-green-50" rowSpan={41}>
//                   주변 객체
//                 </td>
//                 <td className="py-1 border bg-green-50" rowSpan={10}>
//                   객체정보(NPC1)
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체종류</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 차로</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 가감속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(가감속)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(시작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" rowSpan={10}>
//                   객체정보(NPC2)
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체종류</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 차로</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 가감속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(가감속)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(시작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" rowSpan={10}>
//                   객체정보(NPC3)
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체종류</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 차로</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 가감속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(가감속)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(시작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" rowSpan={10}>
//                   객체정보(NPC4)
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체종류</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 차로</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 가감속도</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(가감속)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(시작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">객체 행동(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50">Trigger(동작)</td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" colSpan={3}>
//                   교통상황(LOS)
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" rowSpan={5}>
//                   자율주행차
//                 </td>
//                 <td className="py-1 border bg-green-50" colSpan={2}>
//                   객체종류
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" colSpan={2}>
//                   객체 위치 - 차로
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" colSpan={2}>
//                   객체 속도
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" colSpan={2}>
//                   객체 행동(시작)
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-green-50" colSpan={2}>
//                   객체 행동(동작)
//                 </td>
//               </tr>

//               {/* LAYER 5 시작 */}

//               <tr>
//                 <LayerTableData layer={5} rowSpan={5} className="bg-blue-50" />
//                 <td className="py-1 border bg-blue-50" rowSpan={2}>
//                   시간
//                 </td>
//                 <td className="py-1 border bg-blue-50" colSpan={2}>
//                   시간대
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-blue-50" colSpan={2}>
//                   요일
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-blue-50" rowSpan={3}>
//                   기상환경
//                 </td>
//                 <td className="py-1 border bg-blue-50" colSpan={2}>
//                   날씨
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-blue-50" colSpan={2}>
//                   기온
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-blue-50" colSpan={2}>
//                   조도
//                 </td>
//               </tr>

//               {/* LAYER 6 시작 */}

//               <tr>
//                 <LayerTableData
//                   layer={6}
//                   rowSpan={10}
//                   className="bg-indigo-50"
//                 />
//                 <td className="py-1 border bg-indigo-50" rowSpan={3}>
//                   센싱정보
//                 </td>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   Camera 센서
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   Radar 센서
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   LiDAR 센서
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" rowSpan={5}>
//                   통신정보
//                 </td>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   V2I
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   V2V
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   V2P
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   V2N
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   V2C
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" rowSpan={2}>
//                   위치정보
//                 </td>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   GPS 정보
//                 </td>
//               </tr>
//               <tr>
//                 <td className="py-1 border bg-indigo-50" colSpan={2}>
//                   전자지도 정보
//                 </td>
//               </tr>

//               {/* LAYER 6 시작 */}

//               <tr>
//                 <LayerTableData
//                   layer={7}
//                   rowSpan={1}
//                   className="bg-purple-50"
//                 />
//                 <td className="py-1 border bg-purple-50" colSpan={3}>
//                   법 · 규제
//                 </td>
//               </tr>
//             </tbody>
//           </table>

//           <div className="w-1/5">
//             <div className="py-1 font-bold text-center border bg-slate-50">
//               Depth4
//             </div>
//             {cases.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={classNames(
//                   'text-center border-b border-r',
//                   index === cases.length - 1 ? 'py-4' : 'py-1',
//                 )}
//               >
//                 {item.value ? item.value : '-'}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// };

// export default ExtractCasesModal;
import { ElementType } from '@type/element';
import { Modal } from './Modal';
import classNames from 'classnames';
import { LAYER_LIST } from '@constants/element';

interface ExtractCasesModalProps {
  cases: ElementType[];
  onClose: () => void;
}

const LayerTableData = ({
  layer,
  className,
  rowSpan,
}: {
  layer: number;
  className: string;
  rowSpan: number;
}) => {
  return (
    <td rowSpan={rowSpan} className={classNames('py-1 border', className)}>
      {`Layer${layer}`}
      <br />({LAYER_LIST[layer - 1].name})
    </td>
  );
};

const ExtractCasesModal = ({ cases, onClose }: ExtractCasesModalProps) => {
  let ptr = 0;
  return (
    <Modal onClose={onClose}>
      <div className="max-w-[1200px] flex flex-col items-center gap-3 w-[80vw]">
        <h2 className="text-2xl font-bold">추출 결과</h2>
        <div className="flex w-full">
          <table className="table break-keep w-full text-center border border-collapse">
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <tbody>
              <tr>
                <th className="py-1 border bg-slate-50">Layer</th>
                <th className="py-1 border bg-slate-50">Depth1</th>
                <th className="py-1 border bg-slate-50">Depth2</th>
                <th className="py-1 border bg-slate-50">Depth3</th>
              </tr>
              {/* LAYER 1 시작 */}
              <tr>
                <LayerTableData layer={1} rowSpan={9} className="bg-red-50" />
                <td className="py-1 border bg-red-50" colSpan={3}>
                  도로 기능과 등급
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" rowSpan={2}>
                  도로폭
                </td>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  차로폭
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  갓길폭
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" rowSpan={3}>
                  도로기하구조
                </td>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  도로선형
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  도로 경사
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  차로 수
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" rowSpan={2}>
                  도로표면
                </td>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  도로 포장
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={2}>
                  노면 상태
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-red-50" colSpan={3}>
                  도로유형
                </td>
              </tr>
              {/* LAYER 2 시작 */}

              <tr>
                <LayerTableData
                  layer={2}
                  rowSpan={25}
                  className="bg-orange-50"
                />
                <td className="py-1 border bg-orange-50" rowSpan={6}>
                  도로안전시설
                </td>
                <td className="py-1 border bg-orange-50" rowSpan={3}>
                  차량방호시설
                </td>
                <td className="py-1 border bg-orange-50">중앙분리대</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">방호울타리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">충격흡수시설</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={2}>
                  조명시설
                </td>
                <td className="py-1 border bg-orange-50">연속조명</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">국부조명</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  과속방지턱
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">교통관리시설</td>
                <td className="py-1 border bg-orange-50">신호기</td>
                <td className="py-1 border bg-orange-50">차량 신호</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={9}>
                  도로표지
                </td>
                <td className="py-1 border bg-orange-50" rowSpan={4}>
                  주의표지
                </td>
                <td className="py-1 border bg-orange-50">도로상태 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">노면상황 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">기상상황 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">기타주의 예고</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={3}>
                  규제표지
                </td>
                <td className="py-1 border bg-orange-50">통행금지</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">통행제한</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">금지사항</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={2}>
                  지시표지
                </td>
                <td className="py-1 border bg-orange-50">도로지정</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">통행방법</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={5}>
                  노면표시
                </td>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  중앙선
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  차선
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  사전예고 표시
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  안전속도 표시
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  금지구역 표시
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" rowSpan={4}>
                  운영제약
                </td>
                <td className="py-1 border bg-orange-50" rowSpan={2}>
                  제한속도
                </td>
                <td className="py-1 border bg-orange-50">최고제한속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50">최저 제한속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  보호구역
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-orange-50" colSpan={2}>
                  전용도로
                </td>
              </tr>

              {/* LAYER 3 시작 */}

              <tr>
                <LayerTableData
                  layer={3}
                  rowSpan={4}
                  className="bg-yellow-50"
                />
                <td className="py-1 border bg-yellow-50" rowSpan={4}>
                  도로점용
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-yellow-50" colSpan={2}>
                  도로공사
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-yellow-50" colSpan={2}>
                  선행사고
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-yellow-50" colSpan={2}>
                  장애물
                </td>
              </tr>

              {/* LAYER 4 시작 */}

              <tr>
                <LayerTableData
                  layer={4}
                  rowSpan={46}
                  className="bg-green-50"
                />
                <td className="py-1 border bg-green-50" rowSpan={41}>
                  주변 객체
                </td>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC1)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC2)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC3)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={10}>
                  객체정보(NPC4)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체종류</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 차로</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체위치 - 상대거리</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 가감속도</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(가감속)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(시작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">객체 행동(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50">Trigger(동작)</td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={3}>
                  교통상황(LOS)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" rowSpan={5}>
                  자율주행차
                </td>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체종류
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 위치 - 차로
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 속도
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 행동(시작)
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-green-50" colSpan={2}>
                  객체 행동(동작)
                </td>
              </tr>

              {/* LAYER 5 시작 */}

              <tr>
                <LayerTableData layer={5} rowSpan={5} className="bg-blue-50" />
                <td className="py-1 border bg-blue-50" rowSpan={2}>
                  시간
                </td>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  시간대
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  요일
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" rowSpan={3}>
                  기상환경
                </td>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  날씨
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  기온
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-blue-50" colSpan={2}>
                  조도
                </td>
              </tr>

              {/* LAYER 6 시작 */}

              <tr>
                <LayerTableData
                  layer={6}
                  rowSpan={10}
                  className="bg-indigo-50"
                />
                <td className="py-1 border bg-indigo-50" rowSpan={3}>
                  센싱정보
                </td>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  Camera 센서
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  Radar 센서
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  LiDAR 센서
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" rowSpan={5}>
                  통신정보
                </td>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2I
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2V
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2P
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2N
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  V2C
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" rowSpan={2}>
                  위치정보
                </td>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  GPS 정보
                </td>
              </tr>
              <tr>
                <td className="py-1 border bg-indigo-50" colSpan={2}>
                  전자지도 정보
                </td>
              </tr>

              {/* LAYER 6 시작 */}

              <tr>
                <LayerTableData
                  layer={7}
                  rowSpan={1}
                  className="bg-purple-50"
                />
                <td className="py-1 border bg-purple-50" colSpan={3}>
                  법 · 규제
                </td>
              </tr>

              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={5}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `도로 유형은 ${cases[ptr++]?.value}이며, 도로 폭은 차로폭 \
                    ${cases[ptr++]?.value}, 갓길 폭은 ${cases[ptr++]?.value}입니다. 도로는 \
                    ${cases[ptr++]?.value} 형태로 ${cases[ptr++]?.value}의 경사를 가지고 있으며, \
                    ${cases[ptr++]?.value}로 구성되어 있습니다. 노면 상태는 \
                    ${cases[ptr++]?.value}이며, 포장은 ${cases[ptr++]?.name}로 되어 있습니다. 도로\
                    요형은 ${cases[ptr++]?.value}입니다.`;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>
              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={5}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `도로 안전 시설로는 ${cases[ptr++]?.name}, \
                    ${cases[ptr++]?.name}, ${cases[ptr++]?.name}이 있으며, \
                    ${cases[ptr++]?.name}과 ${cases[ptr++]?.name}이 설치되어 있습니다. \
                    과속방지턱은 ${cases[ptr++]?.value} 상태입니다. 교통 관리 시설로는 \
                    ${cases[ptr++]?.value} 상태이며, 도로표지는 다음과 같음. 도로상태 예고는 \
                    ${cases[ptr++]?.value}이며, 노면상황 예고는 ${cases[ptr++]?.value}이며, \
                    기상상황 예고는 ${cases[ptr++]?.value}이며, 기타주의 예고는 \
                    ${cases[ptr++]?.value}가 있다. 규제표지는 ${cases[ptr++]?.value}이며, \
                    통행제한은 ${cases[ptr++]?.value}이며, 금지사항은 ${cases[ptr++]?.value} \
                    등이 있습니다. 노면 표시는 중앙선은 ${cases[2+ptr++]?.value}이며, 차선은 \
                    ${cases[2+ptr++]?.value}입니다. 사전예고 표시는 ${cases[2+ptr++]?.value}으로 \
                    나타나며, 안전속도 표시는 ${cases[2+ptr++]?.value}, 금지구역 표시는 \
                    ${cases[2+ptr++]?.value}로 설정되어 있습니다. 제한 속도는 최고 \
                    ${cases[2+ptr++]?.value}, 최저 ${cases[2+ptr++]?.value}이며, 보호구역은 \
                    ${cases[2+ptr++]?.value}이며 전용도로가 ${cases[2+ptr++]?.value}로 지정되어 \
                    있습니다.`;
                    ptr += 2;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>
              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={4}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `도로 점용 상태는 현재 공사 상태는 ${cases[ptr++].value}입니다. \
                    선행 사고 상태는 ${cases[ptr++]?.value}이며, 장애물은 ${cases[ptr++]?.value} \
                    상태입니다.`;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>
              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={4}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `도로상황은 LOS ${cases[36+ptr++]?.value}이며 자율주행차는 \
                    ${cases[36+ptr++]?.value}로 ${cases[36+ptr++]?.value} 차로에 위치하고 \
                    있으며 속도는 ${cases[36+ptr++]?.value}입니다. 현재 행동은 \
                    ${cases[36+ptr++]?.value} 후 ${cases[36+ptr++]?.value} 중입니다. 주변 객체 \
                    중 ${cases[-6 + ptr++]?.value}는 ${cases[-6 + ptr++]?.value} 차로에 \
                    위치하고 있으며, 상대 거리는 ${cases[-6 + ptr++]?.value}, 속도는 \
                    ${cases[-6 + ptr++]?.value}입니다. 가감속도는 \
                    ${cases[-6 + ptr++]?.value}이며, 현재 행동은 ${cases[-6 + ptr++]?.value} 후 \
                    ${cases[-6 + ptr++]?.value} 중입니다. 트리거는 ${cases[-6 + ptr++]?.value}와 \
                    ${cases[-6 + ptr++]?.value}입니다. \
                    주변 객체 중 ${cases[-6 + ptr++]?.value}는 ${cases[-6 + ptr++]?.value} 차로에 \
                    위치하고 있으며, 상대 거리는 ${cases[-6 + ptr++]?.value}, 속도는 \
                    ${cases[-6 + ptr++]?.value}입니다. 가감속도는 \
                    ${cases[-6 + ptr++]?.value}이며, 현재 행동은 ${cases[-6 + ptr++]?.value} 후 \
                    ${cases[-6 + ptr++]?.value} 중입니다. 트리거는 ${cases[-6 + ptr++]?.value}와 \
                    ${cases[-6 + ptr++]?.value}입니다. \
                    주변 객체 중 ${cases[-6 + ptr++]?.value}는 ${cases[-6 + ptr++]?.value} 차로에 \
                    위치하고 있으며, 상대 거리는 ${cases[-6 + ptr++]?.value}, 속도는 \
                    ${cases[-6 + ptr++]?.value}입니다. 가감속도는 \
                    ${cases[-6 + ptr++]?.value}이며, 현재 행동은 ${cases[-6 + ptr++]?.value} 후 \
                    ${cases[-6 + ptr++]?.value} 중입니다. 트리거는 ${cases[-6 + ptr++]?.value}와 \
                    ${cases[-6 + ptr++]?.value}입니다. \
                    주변 객체 중 ${cases[-6 + ptr++]?.value}는 ${cases[-6 + ptr++]?.value} 차로에 \
                    위치하고 있으며, 상대 거리는 ${cases[-6 + ptr++]?.value}, 속도는 \
                    ${cases[-6 + ptr++]?.value}입니다. 가감속도는 \
                    ${cases[-6 + ptr++]?.value}이며, 현재 행동은 ${cases[-6 + ptr++]?.value} 후 \
                    ${cases[-6 + ptr++]?.value} 중입니다. 트리거는 ${cases[-6 + ptr++]?.value}와 \
                    ${cases[-6 + ptr++]?.value}입니다.`;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>
              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={4}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `주행 시간은 ${cases[ptr++]?.value}, 요일은 \
                    ${cases[ptr++]?.value}입니다. 기상 환경은 ${cases[ptr++]?.value}이며 기온은 \
                    ${cases[ptr++]?.value}이고 조도는 ${cases[ptr++]?.value} 상태입니다.`;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>
              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={4}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `센싱 정보는 Camera 센서 ${cases[ptr++]?.value}, Radar 센서 \
                    ${cases[ptr++]?.value}, LiDAR 센서 ${cases[ptr++]?.value}이며, 통신 정보로는 \
                    V2I-${cases[ptr++]?.value}, V2V-${cases[ptr++]?.value}, \
                    V2P-${cases[ptr++]?.value}, V2N-${cases[ptr++]?.value}, \
                    V2C${cases[ptr++]?.value}가 사용됩니다. 위치 정보에 대해 GPS정보는 \
                    ${cases[ptr++]?.value}이며 전자지도 정보는 ${cases[ptr++]?.value} 입니다.`;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>
              <tr>
                <td className="py-2 border bg-gray-100 text-center font-bold" rowSpan={1} colSpan={4}>
                  {(() => {
                    // 설명 문자열을 정의
                    let descrip = `적용되는 법규는 ${cases[ptr]?.value}: '${cases[ptr]?.content}' 입니다.`;
                    // 반환
                    return descrip;
                  })()}
                </td>
              </tr>

            </tbody>
          </table>

          <div className="w-1/5">
            <div className="py-1 font-bold text-center border bg-slate-50">
              Depth4
            </div>
            {cases.map((item, index) => {
              return(
                <div
                  key={item.id}
                  className={classNames(
                    'text-center border-b border-r',
                    index === cases.length - 1 ? 'py-4' : 'py-1',
                  )}
                >
                  {item.value ? item.value : '-'}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ExtractCasesModal;
