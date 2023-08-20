import React, { useState, useEffect, createContext } from "react";
import "./Header.css";
import Text from "../GroupandOrder";

const ResDataContext = createContext();
const UserStatusContext = createContext();

const Header = () => {
  const [showBox, setShowBox] = useState(false);
  const [groupBy, setGroupBy] = useState("User");
  const [res, setResponse] = useState({});
  const [orderBy, setOrderBy] = useState("Priority");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment",
      );

      if (!response.ok) {
        console.log("error as well");
      }

      const jsonData = await response.json();
      setResponse(jsonData);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  return (
    <>
      {/* <ResDataContext.Provider value={'res'}>
<UserStatusContext.Provider value={'groupByorderBy'}> */}
      <div className="headerDiv">
        <div className="headerDivBody" onClick={toggleBox}>
          <i className="fas fa-sliders"></i>
          <h3>Display</h3>
          <i className="fas fa-chevron-down fa-2xs"></i>
        </div>

        {showBox && (
          <div className="optionsBox">
            <div className="optionBoxDiv1">
              <label>Grouping:</label>
              <select
                value={groupBy}
                onChange={(e) => setGroupBy(e.target.value)}
              >
                <option value="User">User</option>
                <option value="Priority">Priority</option>
                <option value="Status">Status</option>
              </select>
            </div>
            <div className="optionBoxDiv1">
              <label>Ordering:</label>
              <select
                value={orderBy}
                onChange={(e) => setOrderBy(e.target.value)}
              >
                <option value="Priority">Priority</option>
                <option value="Title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
      {/* </UserStatusContext.Provider>
</ResDataContext.Provider> */}
      <ResDataContext.Provider value={res}>
        <UserStatusContext.Provider value={{ groupBy, orderBy }}>
          <Text />
        </UserStatusContext.Provider>
      </ResDataContext.Provider>
    </>
  );
};

export default Header;
export { UserStatusContext, ResDataContext };
