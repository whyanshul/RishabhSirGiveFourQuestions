import { useState } from "react";
import "./App.css";

function App() {
  const [textList, setTextList] = useState([{ service: "" }]);


  const handleTextChange = (event, index) => {
    const { name, value } = event.target;
    const list = [...textList];
    list[index][name] = value;
    setTextList(list);
  };



  const handleTextRemove = (index) => {
    const list = [...textList];
    list.splice(index, 1);
    setTextList(list);
  };



  const handleTextAdd = () => {
    setTextList([...textList, { text: "" }]);
  };



  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service">Input Text</label>
        {textList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="div_one">
              <input
                name="service"
                type="all"
                id="service"
                value={singleService.service}
                onChange={(event) => handleTextChange(event, index)}
                required
              />
              {textList.length - 1 === index && textList.length < 5 && (
                <button
                  type="button"
                  onClick={handleTextAdd}
                  className="add-btn">
                  <span>Add</span>
                </button>
              )}
            </div>
            <div className="div_two">
              {textList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleTextRemove(index)}
                  className="remove-btn">
                  <span>Delete</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Result</h2>
        {textList &&
          textList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
    </form>
  );
}

export default App;