import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import progressCounter from '../utils/progressCounter';

//
function Checklist({ list }) {
  // const [progress, setProgress] = useState(0);
  // const [danger, setDanger] = useState(0);
  // const [warning, setWarning] = useState(0);
  // const [success, setSuccess] = useState(0);
  const { uniqueUrl } = useParams();
  const [inputs, setInputs] = useState({});
  const [inputs1, setInputs1] = useState({ tim1: '', tim2: '', tim3: '' });
  const navigate = useNavigate();
  const changeHandler = async (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.checked }));
  };
  const changeHandlerName = async (e) => {
    setInputs1((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/v1/names/${uniqueUrl}`);
      const result = await resp.json();
      setInputs1(result);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await fetch(`/api/v1/${uniqueUrl}`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(inputs),
      });
    })();
  }, [inputs]);

  useEffect(() => {
    (async () => {
      const resp = await fetch(`/api/v1/${uniqueUrl}`);
      const result = await resp.json();
      setInputs(result);
    })();
  }, []);

  const submitHandler = async (event) => {
    event.preventDefault();
    await fetch(`/api/v1/names/${uniqueUrl}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(inputs1),
    });
  };

  let progress;
  let danger;
  let warning;
  let success;

  progress = progressCounter(list);
  danger = (progress - 50) < 0 ? progress : 50;
  progress -= danger;
  if (danger === 50 && progress) {
    warning = (progress - 25) < 0 ? progress : 25;
    progress -= warning;
  }
  if (warning === 25 && progress) {
    success = progress - 25 < 0 ? progress : 25;
  }
  // useEffect(() => {
  //   setProgress(progressCounter(list));
  //   setDanger((progress - 50) < 0 ? progress : 50);
  //   setProgress((prev) => (prev - danger));
  //   if (danger === 50 && progress) {
  //     setWarning((progress - 25) < 0 ? progress : 25);
  //     setProgress((prev) => (prev - warning));
  //   }
  //   if (warning === 25 && progress) {
  //     setSuccess((progress - 25) < 0 ? progress : 25);
  //   }
  // }, [inputs]);

  // progress

  return (
    <div className="container">
      {`Твой прогресс: ${progressCounter(list)} %`}
      <div className="progress">
        <div className="progress-bar bg-danger" role="progressbar" aria-label="Segment one" style={{ width: `${danger}%` }} aria-valuemin="0" aria-valuemax="100" />
        <div className="progress-bar bg-warning" role="progressbar" aria-label="Segment two" style={{ width: `${warning}%` }} aria-valuemin="0" aria-valuemax="100" />
        <div className="progress-bar bg-success" role="progressbar" aria-label="Segment three" style={{ width: `${success}%` }} aria-valuemin="0" aria-valuemax="100" />
      </div>
      <form onSubmit={submitHandler}>
        <div className="d-grid gap-4 p-3">
          <div>
            Привет,
            <p className="text-start text-success" style={{ marginBottom: '4px' }}>
              {' '}
              {list?.userName}
            </p>
            <p className="text-start" style={{ marginBottom: '4px' }}>
              И добро пожаловать в команду
              {' '}
              <p className="text-success" style={{ marginBottom: '4px' }}>Высокогорья!</p>
            </p>
            <p className="text-start" style={{ marginBottom: '5px' }}>
              Впереди нас ждет интересное путешествие в мир нашей компании,
              и самым главным проводником будет -
              {' '}
              <p className="text-success" style={{ marginBottom: '4px' }}>{list?.menthorName}</p>
            </p>
            <p className="fw-lighter" style={{ marginBottom: '6px' }}>
              Мы подготовили для тебя чек-лист на первый день.
              Процесс выполнения будет сохраняться, поэтому ты можешь
              закрывать пункты в удобном для тебя порядке.
            </p>
          </div>
          <div className="vstack p-3">
            <p className="fw-bold">Нужно подготовить твое рабочее место:</p>
            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q1" onChange={changeHandler} checked={inputs.q1} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Наставник выдал мне пропуск
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q2" onChange={changeHandler} checked={inputs.q2} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Наставник сообщил пароль от Wi-Fi
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q3" onChange={changeHandler} checked={inputs.q3} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Системный администратор выдал мне ноутбук
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q4" onChange={changeHandler} checked={inputs.q4} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Системный администратор выдал мне доступы к почте
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q5" onChange={changeHandler} checked={inputs.q5} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты отправил(-а) офис-менеджеру на почту список необходимой для тебя канцелярии
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              Важно познакомиться с коллегами:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q6" onChange={changeHandler} checked={inputs.q6} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты познакомился (-ась) со своим руководителем
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q7" onChange={changeHandler} checked={inputs.q7} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты написал(-а) сообщение в командный чат
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q8" onChange={changeHandler} checked={inputs.q8} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Напиши имена трех твоих коллег по отделу:
                <div className="col-sm-3">
                  <input name="tim1" onChange={changeHandlerName} value={inputs1.tim1} className="form-control" id="specificSizeInputName" />
                </div>

                <div className="col-sm-3">
                  <input name="tim2" onChange={changeHandlerName} value={inputs1.tim2} className="form-control" id="specificSizeInputName1" />
                </div>

                <div className="col-sm-3">
                  <input name="tim3" onChange={changeHandlerName} value={inputs1.tim3} className="form-control" id="specificSizeInputName2" />
                </div>
                <button type="submit" className="btn btn-primary">Сохранить</button>

              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              Важно пройти оформление в отделе кадров:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q9" onChange={changeHandler} checked={inputs.q9} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты отправил (-а)  сканы документы на оформление в отдел кадров
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q10" onChange={changeHandler} checked={inputs.q10} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Ты подписал (-а) соглашение о коммерческой тайне
              </label>
            </div>
          </div>

          <div className="vstack p-3">
            <p className="fw-bold">
              А теперь самое время работать:
            </p>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q11" onChange={changeHandler} checked={inputs.q11} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Получи свою первую задачу у руководителя
              </label>
            </div>

            <div className="form-check">
              <label className="form-check-label" htmlFor="flexCheckDefault">
                <input name="q12" onChange={changeHandler} checked={inputs.q12} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                Создай подпись в почте по корпоративному шаблону
              </label>
            </div>
          </div>
          <p className="text-end">
            <p style={{ marginBottom: '1px' }}>
              Классного путешествия!
            </p>
            <p style={{ marginBottom: '1px' }}>
              Команда
              {' '}
              <p className="text-success">Высокой горы 💚</p>
            </p>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Checklist;
