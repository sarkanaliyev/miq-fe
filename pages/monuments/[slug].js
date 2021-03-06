import { AiOutlineSearch } from "react-icons/ai";

// import monuments from "../../monuments.json";
import { fromImageToUrl, API_URL } from "../../utils/urls";
import { BsArrowLeft } from "react-icons/bs";

import styles from "../districts/Districts.module.css";
import monuments_styles from "./Monuments.module.css";
// const monument = monuments[0];
import { useState } from "react";
import AbidelerGrid from "../../components/AbidelerGrid";

import Link from "next/link";

import Menu from "../../components/Menu.js";

import { useRouter } from "next/router";
import home_styles from "../../styles/Home.module.css";
import meram_styles from "../../pages/meramimiz/Meram.module.css";

const Monuments = ({ monument, monuments }) => {
  const new_monument_arr = [
    {
      name: monuments.map((item) => item.name),
      slug: monuments.map((item) => item.slug),
    },
  ];
  const [suggestions, setSuggestions] = useState([]);
  const [text, setText] = useState("");

  const onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = new_monument_arr[0].name
        .sort()
        .filter((v) => regex.test(v));
    }
    setSuggestions(suggestions);
    setText(value);
  };

  const suggestionSelected = (value) => {
    setText(new_monument_arr[0].slug[new_monument_arr[0].name.indexOf(value)]);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }
    return (
      <ul>
        {suggestions.map((item) => (
          <Link
            href={`/monument/${
              new_monument_arr[0].slug[new_monument_arr[0].name.indexOf(item)]
            }`}
          >
            <li onClick={() => suggestionSelected(item)}>{item}</li>
          </Link>
        ))}
      </ul>
    );
  };
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState();
  monument.monuments.includes((monument) => {});
  const [radio, setRadio] = useState("apple");
  const [content, setContent] = useState("apple content");
  const [category, setCategory] = useState(
    monument.monuments.some((item) => item.category == "3") &&
      !monument.monuments.some((item) => item.category == "1")
      ? 3
      : 1
  );
  // const [category, setCategory] = useState(1);
  const [firstChecked, setFirstChecked] = useState(
    monument.monuments.some((item) => item.category == "3") &&
      !monument.monuments.some((item) => item.category == "1")
      ? false
      : true
  );
  const [secondChecked, setSecondChecked] = useState(false);
  const [thirdChecked, setThirdChecked] = useState(
    monument.monuments.some((item) => item.category == "3") &&
      !monument.monuments.some((item) => item.category == "1")
      ? true
      : false
  );
  const [fourthChecked, setFourthChecked] = useState(false);

  const handeFirst = () => {
    setFirstChecked(true);
    setSecondChecked(false);
    setThirdChecked(false);
    setFourthChecked(false);
  };
  const handeSecond = () => {
    setFirstChecked(false);
    setSecondChecked(true);
    setThirdChecked(false);
    setFourthChecked(false);
  };
  const handeThird = () => {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(true);
    setFourthChecked(false);
  };
  const handeFourth = () => {
    setFirstChecked(false);
    setSecondChecked(false);
    setThirdChecked(false);
    setFourthChecked(true);
  };

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }

  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }

  return (
    <div className={styles.districts_container}>
      <div className={monuments_styles.districts_heykel}>
        <div className={monuments_styles.nazirlik}>
          <a href="/">
            <img src="/logo.svg" />
          </a>
        </div>
        <div className={monuments_styles.quote_div}>
          <a className={monuments_styles.quote}>
            "Tar??x?? oldu??u k??m?? q??bul etm??k, d??rk etm??k v?? oldu??u k??m??
            q??ym??tl??nd??rm??k laz??md??r"
          </a>
          <a className={monuments_styles.heyder_eliyev}>Heyd??r ??liyev</a>
        </div>
        <div className={monuments_styles.hamburger_div}>
          <div className={home_styles.search_div}>
            <input
              className={home_styles.search_input}
              type="text"
              placeholder="Abid?? axtar..."
              // value={text}
              onChange={onTextChanged}
            />
            {renderSuggestions()}
          </div>
          <a href="#" className={monuments_styles.hamburger} onClick={openNav}>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
            <div className={monuments_styles.h_div}></div>
          </a>
        </div>
      </div>

      <div className={styles.districts_responsive}>
        <div className={monuments_styles.monuments_arrow}>
          {/* <Link href="/districts"> */}
          <a onClick={() => router.back()} className={styles.meram_arrow}>
            <BsArrowLeft
              size={"2.6525198938992043vh"}
              className={monuments_styles.arrow}
            />
          </a>
          {/* </Link> */}
        </div>
        <p className={monuments_styles.monuments_rayonlar}>
          <a href="/" className={meram_styles.meram_link}>
            Ana s??hif??&nbsp;
          </a>
          <a href="/districts" className={meram_styles.meram_link}>
            / Rayonlar&nbsp;
          </a>
          / {monument.name}
        </p>
        <p className={monuments_styles.monuments_sub_rayonlar}>Abid??l??r</p>

        <select
          // value={"dropdown"}
          // onChange={(e) => {
          //   setContent(e.target.value);
          //   setDropdown(e.target.value);
          //   setRadio(e.target.value);
          //   setCategory(parseInt(e.target.value, 10));
          // }}

          onChange={(e) => {
            setRadio(e.target.value);
            setContent("apple content");
            setCategory(parseInt(e.target.value, 10));
          }}
          className={monuments_styles.dropdown}
        >
          <option value="1">MEMARLIQ AB??D??L??R??</option>
          <option value="2">BA??-PARK,MONOMENTAL V?? XAT??R?? AB??D??L??R??</option>
          <option value="3">ARXEOLOJ?? AB??B??L??R</option>
          <option value="4">DEKORAT??V-T??TB??Q?? S??N??T N??MUN??L??R??</option>
        </select>

        <div className={monuments_styles.button_group}>
          {monument.monuments.some((item) => item.category == "1") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option1"
                name="myRadio"
                id="myRadio1"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("apple content");
                  setCategory(1);
                  handeFirst();
                }}
                checked={firstChecked}
              />
              <label className={monuments_styles.radio__label} for="myRadio1">
                MEMARLIQ AB??D??L??R??
              </label>
            </>
          )}
          {monument.monuments.some((item) => item.category == "2") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option2"
                name="myRadio"
                id="myRadio2"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("orange content");
                  setCategory(2);
                  handeSecond();
                }}
              />
              <label className={monuments_styles.radio__label} for="myRadio2">
                BA??-PARK,MONOMENTAL V?? XAT??R?? AB??D??L??R??
              </label>
            </>
          )}
          {monument.monuments.some((item) => item.category == "3") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option3"
                name="myRadio"
                id="myRadio3"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("banana content");
                  setCategory(3);
                  handeThird();
                }}
                checked={thirdChecked}
              />
              <label className={monuments_styles.radio__label} for="myRadio3">
                ARXEOLOJ?? AB??B??L??R
              </label>
            </>
          )}
          {monument.monuments.some((item) => item.category == "4") && (
            <>
              <input
                className={monuments_styles.radio__input}
                type="radio"
                value="option4"
                name="myRadio"
                id="myRadio4"
                onChange={(e) => {
                  setRadio(e.target.value);
                  setContent("dord content");
                  setCategory(4);
                  handeFourth();
                }}
              />
              <label className={monuments_styles.radio__label} for="myRadio4">
                DEKORAT??V-T??TB??Q?? S??N??T N??MUN??L??R??
              </label>
            </>
          )}
        </div>

        <div className={styles.rayonlar_grid}>
          <AbidelerGrid monuments={monument.monuments} category={category} />
        </div>
      </div>
      <Menu />
    </div>
  );
};

export async function getStaticProps({ params: { slug } }) {
  const monuments_res = await fetch(`${API_URL}/districts/?slug=${slug}`);
  const monuments_1 = await monuments_res.json();

  const monuments_res_2 = await fetch(`${API_URL}/monuments/`);
  const monuments = await monuments_res_2.json();
  return {
    props: {
      monument: monuments_1[0],
      monuments,
    },
  };
}

export async function getStaticPaths() {
  const districts_res = await fetch(`${API_URL}/districts/`);
  const districts = await districts_res.json();

  return {
    paths: districts.map((district) => ({
      params: { slug: String(district.slug) },
    })),
    fallback: false,
  };
}

export default Monuments;
