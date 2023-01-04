import React, { useState } from 'react';

function New({ errors }) {
  const [form, setForm] = useState({
    singer: '',
    songTitle: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <h1>Sign Up to Karaoke</h1>

      <main className="form-wrapper">

        {errors[0].error && (
          <div className="errors-wrapper">
            <span>Your entry could not be saved:</span>
            <ul className="errors">
              {errors.map(({ error }) => (
                <li
                  key={Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)}
                  className="error"
                >
                  {error}

                </li>
              ))}
            </ul>
          </div>
        )}

        <form method="post" action="/creation-new-post-post">

          <label htmlFor="singer_name_input">Singer name:</label>
          <input id="singer_name_input" name="singer" type="text" value={form.singer} onChange={handleChange} />

          <label htmlFor="songTitle_input">Song title:</label>
          <input id="songTitle_input" name="songTitle" type="text" value={form.songTitle} onChange={handleChange} />

          <input type="submit" value="Put me on the List!" className="button" />

        </form>
      </main>
    </div>
  );
}

export default New;
