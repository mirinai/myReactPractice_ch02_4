// import type {FC, ReactNode} from 'react';
import type {FC, PropsWithChildren} from 'react';

//컴포넌트 안에서 children속성 쓰기
// export type PProps = {
//   children?: ReactNode;
// };

// const P: FC<PProps> = props => {
//   const {children} = props;
//   return <p children={children} />;
// };

//PropsWithChildren제네릭 쓰기
export type PProps = {};
const P: FC<PropsWithChildren<PProps>> = props => {
  return <p {...props} />;
};

export default P;
