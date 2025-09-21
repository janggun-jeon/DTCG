import { Link } from 'react-router-dom';
import { PATH } from '@constants/path';

const SplashPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 py-20">
      <img src="/logo.svg" alt="logo" className="max-w-[300px]" />
      <div className="flex flex-col gap-2 text-3xl text-center">
        <h1>경기대학교 교통계획연구실 & SmartIot연구실</h1>
        <h1>주행 테스트 케이스 생성기</h1>
      </div>
      <Link to={PATH.HOME}>
        <button className="w-64 py-4 text-xl font-bold text-white bg-orange-500 rounded-full shadow-lg hover:bg-orange-400 dark:bg-orange-500/80 dark:hover:bg-orange-400/80">
          시작하기
        </button>
      </Link>
    </div>
  );
};

export default SplashPage;
