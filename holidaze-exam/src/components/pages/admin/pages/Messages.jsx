import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../../context/AuthContext";
import useAxios from "../../../../hooks/useAxios";
import useToggle from "../../../../hooks/useToggle";
import { CONTACT_PATH } from "../../../../utils/Api";
import BookingsForm from "../components/BookingsForm";
import Dashboard from "../components/Dashboard";
import { format } from "fecha";

const Messages = () => {
  const [isTriggered, setIsTriggered] = useToggle();
  const [error, setError] = useState();
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [auth] = useContext(AuthContext);

  const http = useAxios();

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const data = await http.get(CONTACT_PATH);
      setContacts(data.data.data);
      setIsLoading(false);
    };

    fetchData().catch((error) => setError(error.response.data.error));
  }, [isTriggered, auth]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="messages">
      <div className="messages__dash">
        <Dashboard />
      </div>
      <div className="messages__page">
        <h1>Messages</h1>
        {contacts.map((item, idx) => {
          return (
            <Link
              key={item.id}
              to={`/contact/${item.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
              className="link"
            >
              <div className="messages__card" key={item.id}>
                <div className="messages__nametime">
                  <p>{item.attributes.name}</p>
                  <p className="date">
                    {format(
                      new Date(item.attributes.createdAt),
                      "HH:MM Do MMMM YYYY"
                    )}
                  </p>
                </div>
                <p className="subject">{item.attributes.subject}</p>
                <p className="message">{item.attributes.message}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Messages;
