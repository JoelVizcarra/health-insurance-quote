const TextError = (props: any) => {
  return (
    <div className="error">
      <small>{props.children}</small>
    </div>
  );
};

export default TextError;
