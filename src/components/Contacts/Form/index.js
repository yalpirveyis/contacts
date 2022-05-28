import React, { useEffect, useState } from "react";
const initialFormValues = { fullname: "", phone: "" };
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubm = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone === "") return false;
    addContact([...contacts, form]);
  };
  return (
    <form onSubmit={onSubm}>
      <div>
        <input
          autoFocus={true}
          name="fullname"
          placeholder="Full Name"
          value={form.fullname}
          onChange={onChangeForm}
        ></input>
      </div>
      <div>
        <input
          name="phone"
          placeholder="Phone Number"
          value={form.phone}
          onChange={onChangeForm}
        ></input>
      </div>
      <div className="btn">
        <button>Submit</button>
      </div>
    </form>
  );
}

export default Form;
