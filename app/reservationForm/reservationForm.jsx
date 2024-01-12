"use client";
import React, { useState } from "react";
import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
import styles from "./reservationForm.module.css";

function ReservationForm() {
  const [time, setTime] = useState(0);
  const [date, setDate] = useState(0);
  const [person, setPerson] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(date, time, person);
  }

  return (
    <section id={styles.reservation_form} className="dark_bg1">
      <div id={styles.container}>
        <form id={styles.form_box}>
          <input
            type="number"
            name="person"
            id=""
            className={styles.input_box}
            placeholder="Person"
            onChange={(e) => setPerson(e.target.value)}
          />
          <input
            type="date"
            name="date"
            id=""
            className={styles.input_box}
            vlaue={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="time"
            name="time"
            id=""
            className={styles.input_box}
            vlaue={time}
            onChange={(e) => setTime(e.target.value)}
          />
          <button
            name="submit"
            className="btn"
            id={styles.submit_btn}
            onClick={(e) => handleSubmit(e)}
          >
            Submit
          </button>
        </form>
        <div id={styles.video_box}>
          <div id={styles.video}>
            <CldVideoPlayer
              src="https://res.cloudinary.com/dhyphh6al/video/upload/v1705092546/videos/0112_rvc8ge.mp4"
              controls={true}
              autoPlay={true}
              quality={1080}
              loop={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReservationForm;
