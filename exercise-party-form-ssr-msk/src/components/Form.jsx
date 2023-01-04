import React from 'react';

export default function Form() {
  return (
    <form method="POST" action="">
      <div className="form-row m-b-55">
        <div className="name">Как тебя зовут</div>
        <div className="value">
          <div className="row row-space">
            <div className="col-2">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="first_name" />
                <label className="label--desc">Имя</label>
              </div>
            </div>
            <div className="col-2">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="last_name" />
                <label className="label--desc">Фамилия</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="name">Любимая настолка</div>
        <div className="value">
          <div className="input-group">
            <input className="input--style-5" type="text" name="game" />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="name">Email</div>
        <div className="value">
          <div className="input-group">
            <input className="input--style-5" type="email" name="email" />
          </div>
        </div>
      </div>
      <div className="form-row m-b-55">
        <div className="name">Телефон</div>
        <div className="value">
          <div className="row row-refine">
            <div className="col-3">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="area_code" />
                <label className="label--desc">Код (+7, +315)</label>
              </div>
            </div>
            <div className="col-9">
              <div className="input-group-desc">
                <input className="input--style-5" type="text" name="phone" />
                <label className="label--desc">Номер</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="name">Фаза</div>
        <div className="value">
          <div className="input-group">
            <div className="rs-select2 js-select-simple select--no-search">
              <select name="phase">
                {/* <option disabled="disabled" selected="selected">Выбери фазу</option> */}
                <option value="1">Фаза 1</option>
                <option value="2">Фаза 2</option>
                <option value="3">Фаза 3</option>
              </select>
              <div className="select-dropdown" />
            </div>
          </div>
        </div>
      </div>
      <div className="form-row p-t-20">
        <label className="label label--block">Был раньше на Elbrus Party?</label>
        <div className="p-t-15">
          <label className="radio-container m-r-55">
            Да, был
            <input type="radio" defaultChecked="checked" name="first_time" value={false} />
            <span className="checkmark" />
          </label>
          <label className="radio-container">
            Нет, впервые
            <input type="radio" name="first_time" value />
            <span className="checkmark" />
          </label>
        </div>
      </div>
      <div>
        <button className="btn btn--radius-2 btn--red" type="submit">Регистрация</button>
      </div>
    </form>
  );
}
