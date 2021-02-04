const Result = (props: any) => {
  return (
    <div>
      <button
        className="button button--primary"
        type="reset"
        onClick={props.resetForm}
      >
        Volver
      </button>
    </div>
  );
};
export default Result;
