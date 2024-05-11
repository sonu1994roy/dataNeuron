import React, { useState, useEffect } from "react";
import axios from 'axios';

import './App.css';

function App() {
  const [textData, setTextData] = useState('');
  const [loading, setLoading] = useState(false);
  const [countData, setCountData] = useState([]);
  const [data, setData] = useState([]);
  const [updatedText, setUpdatedText] = useState(''); 


  // handle change
  const handleChange = (e) => {
    setTextData(e.target.value);
  };

  //submit the form add entry
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {data} = await axios.post('/api/data', { textData });
      setTextData('');
      if (data.success) {
        // Fetch  data again to update count
        fetchCountData();
        fetchData();
      }else{
        alert(data.error)
      }
    } catch (error) {
      alert.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  // fetch the counts add/update count
  const fetchCountData = async () => {
    try {
      const { data } = await axios.get('/api/count');
      if (data.success) {
        setCountData(data.counts);
      }
    } catch (error) {
      alert('Error fetching count data:', error);
    }
  };

  // fetch the counts add/update count
  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/all-data');
      if (data.success) {
        setData(data.data);
      }
    } catch (error) {
      alert('Error fetching count data:', error);
    }
  };

   // handle update change
   const handleUpdateChange = (e) => {
    setUpdatedText(e.target.value);
  };
  // handle submit updated data
  const editTask = async (id) => {
    try {
      const { data } = await axios.post(`/api/data?id=${id}`, { textData: updatedText});
      // Fetch  data again to update count
      if (data.success) {
        fetchCountData();
        fetchData();
      }else{
        alert(data.error)
      }
    } catch (error) {
      alert('Error updating data:', error);
    }
  };

  // Fetch count data when component mounts
  useEffect(() => {
    fetchCountData();
    fetchData();
  }, []);



  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-center mb-4">DataNeuron</h1>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card">
              <div className="card-body">
                <form className="form mt-2 mb-2" onSubmit={handleSubmit}>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="todo-input"
                      placeholder="Add new Data"
                      value={textData}
                      onChange={handleChange}
                      required
                    />
                    <button className="btn btn-primary" type="submit" disabled={loading}>
                      {loading ? (
                        <div className="spinner-border text-warning w-75 h-75" role="status">
                          <span className="sr-only"></span>
                        </div>
                      ) : (
                        'Add'
                      )}
                    </button>
                  </div>
                </form>
                <div className='d-flex justify-conetnt-between align-items-senter mb-2 mt-2'>
                  <div className='d-block m-auto py-2 px-4 bg-success rounded'><span className='text-light'>add count: {countData?countData?.addCount:0}</span></div>
                  <div className='d-block m-auto py-2 px-4 bg-info rounded'><span className='text-light'>update count: {countData ?countData?.updateCount :0}</span></div>
                </div>
                <ul className="list-group mt-2 mb-2">
                  {data && data.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <span className="task-text">{item.textData}</span>
                      <input
                        type="text"
                        className="form-control edit-input"
                        style={{ display: "none" }}
                        value={updatedText} // Use updatedText state
                        onChange={handleUpdateChange}
                      />
                      <div className="btn-group">
                        <button
                          className="btn btn-primary btn-sm edit-btn"
                          onClick={(e) => {
                            const taskText = e.target.parentElement.parentElement.querySelector(
                              ".task-text"
                            );
                            const editInput = e.target.parentElement.parentElement.querySelector(
                              ".edit-input"
                            );
                            if (taskText.style.display !== "none") {
                              setUpdatedText(item.textData) //set selected data in updated state 
                              taskText.style.display = "none";
                              editInput.style.display = "block";
                              editInput.focus();
                              e.target.innerHTML = "✔";
                            } else {
                              editTask(item._id); // Call editTask with updated text and id
                              taskText.style.display = "inline";
                              editInput.style.display = "none";
                              e.target.innerHTML = "✎";
                            }
                          }}
                        >
                          ✎
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
