/**
 * @description
 * 메인화면 Modal 상태
 */
export type Modal =
  | '사고'
  | '법률'
  | '랜덤'
  | '선택'
  | '알림'
  | '프리셋'
  | '추출'
  | 'none';

/**
 * @description
 * 페이지네이션 화면 이동 방향
 */
export type Step = 'back' | 'forward';

/**
 * @description 시나리오 생성 타입
 */
export type RandomType = '랜덤' | '선택';
