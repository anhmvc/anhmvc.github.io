import "./pill.css";

export default function Pill(props: { name: string }) {
  return (
    <div className="pill-container">
      <h3 className="pill-text">{props.name}</h3>
    </div>
  );
}
