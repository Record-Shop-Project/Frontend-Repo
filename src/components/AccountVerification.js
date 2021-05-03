import { useParams, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { verifyUser } from "../helpers/apiCall";

const AccountVerification = () => {
  const history = useHistory();
  let { emailVerifToken } = useParams();
  const [verifMsg, setVerifMsg] = useState("");

  useEffect(() => {
    const sendVerifToken = async () => {
      const response = await verifyUser(emailVerifToken);

      if (response.error) {
        setVerifMsg(response.error.message);
      } else setVerifMsg(response.message);
      setTimeout(() => {
        history.push("/");
      }, 2000);
    };

    sendVerifToken();
  }, []);

  return (
    <div className="email-verif">
      <section>
        <p>{verifMsg}</p>
      </section>
    </div>
  );
};

export default AccountVerification;
