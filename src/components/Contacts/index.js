import React, { useEffect, useState } from "react";
import Form from "./Form";
import List from "./List";

function Contacts() {
  const [contacts, setContacts] = useState([
    { fullname: "Veyis", phone: "123213" },
    { fullname: "Ahmet", phone: "234234" },
    { fullname: "Halil", phone: "421123" },
    { fullname: "Zek", phone: "4124512" },
  ]);
  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
