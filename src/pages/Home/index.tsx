import style from './index.module.css';
export default function Home(props: any) {
  return (
    <>
      <p>{props.text}</p>
      <div className={style.home}>page home</div>
    </>
  );
}
