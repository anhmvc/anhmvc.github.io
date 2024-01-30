import "./about.css";
import rightArc from "../../static/icons/right-arc.svg";

export default function About() {
  return (
    <div className="page-container about">
      <div className="inner-container">
        <div>
          <h1 className="title about-title">about</h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur. Mauris mattis enim augue
            luctus sapien quis sagittis. Vestibulum lobortis at vulputate
            consectetur vitae mauris pellentesque duis. Urna congue eu at vitae
            non eleifend felis tristique faucibus. Leo nullam et tristique
            etiam. Aliquam cras aliquet eget mattis sit urna id dolor. Id
            consequat diam ultrices sit auctor cras id sit. Dignissim gravida
            mattis laoreet tincidunt egestas rhoncus eget. Gravida lobortis
            montes convallis sollicitudin dignissim cursus dictum augue
            suspendisse. Odio morbi sed diam vestibulum et risus semper.
          </p>
          <div className="links">
            <h2 className="links">resume</h2>
            <img className="links" src={rightArc} alt="right-arrow" />
          </div>
        </div>
        <div className="photo"></div>
      </div>
    </div>
  );
}
