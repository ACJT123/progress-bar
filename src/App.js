import "./App.css";

function App() {
  const onChange = (ev) => {
    const value = ev.target.value;

    if (value < 0 || value > 100) {
      alert("Please enter a number between 0 and 100");
      return;
    }

    const progressBar = document.querySelector(".progress-fill");
    progressBar.setAttribute("data-label", `${value}%`);
    progressBar.style.width = `${value}%`;

    document
      .querySelector(".progress-bar-wave")
      .setAttribute("data-label", `${value}%`);

    document.querySelectorAll(".wave, .wave2").forEach((wave) => {
      wave.style.setProperty("--wave-height", `${100 - value}%`);
    });
  };

  return (
    <div className="App">
      <h1>Progress Bars</h1>

      <form>
        <label>Input Percentage:</label>
        <input type="number" onChange={onChange} min={0} max={100} />
      </form>

      <div className="list">
        <div>
          <div className="progress-bar">
            <div className="progress-fill" data-label="0%"></div>
          </div>
          <h2>Linear</h2>
        </div>

        <div>
          <div className="progress-bar-wave">
            <div className="wave"></div>
            <div className="wave2"></div>
          </div>
          <h2>Wave</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
