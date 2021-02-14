export default function ItemView(props:any) {
  let record = props.location.state.record.metadata;
  return (
    <div className="Page">
      <p className="back">
      <div className="list">
          <p className="record-title">{record.titles[0].title} </p>
          <p className="abstract">
            {record.abstracts ? record.abstracts[0].value : "Missing Description"}{" "}
          </p>
          </div>
      </p>
    </div>
  );
}
