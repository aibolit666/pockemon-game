import cn from 'classnames'
import s from "./style.module.css";

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  const sectionStyle = {};
  if (urlBg) {
    sectionStyle.backgroundImage = `url(${urlBg})`;
  }
  if (colorBg) {
    sectionStyle.backgroundColor = colorBg;
  }
  return (
    <section className={s.root} style={sectionStyle} id={id}>
      <div className={s.wrapper}>
        <article>
          <div className={s.title}>
            <h3>{title}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.desc, s.full)}>{children}</div>
        </article>
      </div>
    </section>
  );
};

export default Layout;
