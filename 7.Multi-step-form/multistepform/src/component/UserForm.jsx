export default function UserForm(props) {
  // eslint-disable-next-line react/prop-types
  const { handleSubmit, handleBack, handleOnChange, index, forms, formData } =
    props;
  return (
    <form action="container" onSubmit={handleSubmit}>
      {index !== 0 && (
        <a onClick={handleBack} href="/">
          back
        </a>
      )}
      <label>{forms[index].name}</label>
      <input
        placeholder={forms[index].placeholder}
        type={forms[index].buttonType}
        id={forms[index].id}
        onChange={handleOnChange}
        value={formData[forms[index].id]}
      />
      <button className="btn">{forms[index].buttonText}</button>
    </form>
  );
}
