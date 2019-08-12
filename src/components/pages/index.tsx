import React, { FC } from 'react'
import './index.scss';

const TopPage: FC<{}> = () => (
  <div className="mainContainer">
    <h1 className="title">Hello World</h1>
    <div className="headingContainer">
      エンタメ
    </div>
    <div className="cardsContainer">
      <div className="cards">
        <div className="card">
          <div className="imageContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/with-ruit.appspot.com/o/uploads%2Farticles%2FIMG_9248.JPG_jvdz7piq_2019_5_8_0_56?alt=media&token=b0f782db-7d11-4566-9f47-434d3a434c2a" />
          </div>
          <div className="bottomContents">
            <div className="heading">
              白黒写真、色付き線を引いただけでカラー写真に？　ふしぎな錯視が発見され話題
            </div>
            <div className="postedDate">
              2019/8/12
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imageContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/with-ruit.appspot.com/o/uploads%2Fplans%2FtripPhoto7.jpg_undefined_2019_3_5_23_47?alt=media&token=c590072b-4c30-4ef4-9402-f7f26db7be03" />
          </div>
          <div className="bottomContents">
            <div className="heading">
              白黒写真、色付き線を引いただけでカラー写真に？　ふしぎな錯視が発見され話題
            </div>
            <div className="postedDate">
              2019/8/12
            </div>
          </div>
        </div>

        <div className="card">
          <div className="imageContainer">
            <img src="https://firebasestorage.googleapis.com/v0/b/with-ruit.appspot.com/o/uploads%2Fplans%2Fjump_girl.jpg_undefined_2019_3_3_13_51?alt=media&token=7fadf2c9-20d2-45c8-ac98-fb60ab1ea283" />
          </div>
          <div className="bottomContents">
            <div className="heading">
              白黒写真、色付き線を引いただけでカラー写真に？　ふしぎな錯視が発見され話題
            </div>
            <div className="postedDate">
              2019/8/12
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
)

export default TopPage