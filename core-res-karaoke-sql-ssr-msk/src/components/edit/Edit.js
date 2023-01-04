import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit({ entry }) {
  const navigate = useNavigate();
  const { entryId } = useParams();
  const [form, setForm] = useState({
    singer: '' || entry?.singer,
    songTitle: '' || entry?.songTitle,
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`/change/${entryId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        if (res.ok) {
          navigate(`/display-one-entry/${entryId}`);
        }
      });
  };

  return (
    <div>
      <h1>Edit the Entry</h1>

      <main className="form-wrapper">
        {/* <form method="patch" action={`/change/${entryId}`}> */}
        <form onSubmit={submitHandler}>

          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="singer" type="text" value={form.singer} onChange={handleChange} />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="songTitle" type="text" value={form.songTitle} onChange={handleChange} />

          <input type="submit" value="Update Entry" className="button" />
          {/* <button type="submit" className="button">Update Entry</button> */}
        </form>
      </main>
    </div>
  );
}

export default Edit;
