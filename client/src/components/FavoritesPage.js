import React, { useEffect, useState } from "react";
import Input from "./Input";
import SelectOption from "./SelectOption";
import "../style/favoritepage.css";
import Card from "./sambleCard";

// const myData = [{
//     "title":"food one",
//     "description":"Классический вариант блюда бефстроганов, готовится из говядины и относится к традиционной русской кухне. Первые упоминания о блюде появились в конце 19 века. С тех пор для приготовления мяса По-строгановски стали использовать не только говяжью вырезку, но и субпродукты, например печень. В отличии от мяса, печень тушится очень быстро, и чем дольше ее готовить, тем жестче она будет. Сегодня готовим печень По-строгановски.",
//     "ingredients":["Печень говяжья — 700 г","Помидор — 2 шт.","Лук репчатый — 1 шт.","Мука — 2 ст. л.","Сметана — 2 ст. л.","Зелень укропа — 30 г","Масло растительное — 2 ст. л.","Сушеный базилик — 1 ч. л.","Соль — 1,5 ч. л.","Черный молотый перец — по вкусу"],
//     "time":"45 мин.",
//     "calories":"215 кКал",
//     "howToMake":["Для приготовления Бефстроганов из говяжьей печени подготовим основной продукт. Печень вымыть и очистить от пленок. Нарезать небольшими кусочками. Я сначала порезал печень, а потом очищал от пленок.","Помидор обдать кипятком и снять кожицу, нарезать кусочками среднего размера. Репчатый лук нарезать четверть кольцами.","В сковороду влить растительное масло и обжарить печень на сильном огне 5-7 минут, помешивая.","Добавить помидоры и репчатый лук, убавить огонь до среднего и готовит помешивая еще 5 минут до образования сока.","Поверх мяса равномерным слоем всыпать 2 столовые ложки муки и выложить 2 ложки сметаны.","Перемешать содержимое сковороды, получится примерно как у меня на фото. Добавить 1,5 чайные ложки соли, приправить черным молотым перцем (по вкусу), также я предпочитаю добавлять базилик. Еще раз перемешать.","Влить 1-1,5 стакана воды. Еще раз помешать, накрыть крышкой и оставить томиться на маленько огне примерно 10 минут.","В самом конце тушеную говяжью печень присыпаем мелко нарубленной зеленью укропа.","Подавать печень По-строгановски можно с различными гарнирами, у меня с картофелем и соленьями. А еще очень вкусно в качестве гарнира подавать гречку и выкладывать тушеную печень и подливку поверх нее.","И еще одно фото бефстроганова из печени. Приятного аппетита!"],
//     "picture":"https://www.iamcook.ru/showrecipe/814"
// },
// {
//     "title":"food two",
//     "description":"Классический вариант блюда бефстроганов, готовится из говядины и относится к традиционной русской кухне. Первые упоминания о блюде появились в конце 19 века. С тех пор для приготовления мяса По-строгановски стали использовать не только говяжью вырезку, но и субпродукты, например печень. В отличии от мяса, печень тушится очень быстро, и чем дольше ее готовить, тем жестче она будет. Сегодня готовим печень По-строгановски.",
//     "ingredients":["Печень говяжья — 700 г","Помидор — 2 шт.","Лук репчатый — 1 шт.","Мука — 2 ст. л.","Сметана — 2 ст. л.","Зелень укропа — 30 г","Масло растительное — 2 ст. л.","Сушеный базилик — 1 ч. л.","Соль — 1,5 ч. л.","Черный молотый перец — по вкусу"],
//     "time":"35 мин.",
//     "calories":"300 кКал",
//     "howToMake":["Для приготовления Бефстроганов из говяжьей печени подготовим основной продукт. Печень вымыть и очистить от пленок. Нарезать небольшими кусочками. Я сначала порезал печень, а потом очищал от пленок.","Помидор обдать кипятком и снять кожицу, нарезать кусочками среднего размера. Репчатый лук нарезать четверть кольцами.","В сковороду влить растительное масло и обжарить печень на сильном огне 5-7 минут, помешивая.","Добавить помидоры и репчатый лук, убавить огонь до среднего и готовит помешивая еще 5 минут до образования сока.","Поверх мяса равномерным слоем всыпать 2 столовые ложки муки и выложить 2 ложки сметаны.","Перемешать содержимое сковороды, получится примерно как у меня на фото. Добавить 1,5 чайные ложки соли, приправить черным молотым перцем (по вкусу), также я предпочитаю добавлять базилик. Еще раз перемешать.","Влить 1-1,5 стакана воды. Еще раз помешать, накрыть крышкой и оставить томиться на маленько огне примерно 10 минут.","В самом конце тушеную говяжью печень присыпаем мелко нарубленной зеленью укропа.","Подавать печень По-строгановски можно с различными гарнирами, у меня с картофелем и соленьями. А еще очень вкусно в качестве гарнира подавать гречку и выкладывать тушеную печень и подливку поверх нее.","И еще одно фото бефстроганова из печени. Приятного аппетита!"],
//     "picture":"https://www.iamcook.ru/showrecipe/814"
//     },
//     {
//         "title":"food three",
//         "description":"Классический вариант блюда бефстроганов, готовится из говядины и относится к традиционной русской кухне. Первые упоминания о блюде появились в конце 19 века. С тех пор для приготовления мяса По-строгановски стали использовать не только говяжью вырезку, но и субпродукты, например печень. В отличии от мяса, печень тушится очень быстро, и чем дольше ее готовить, тем жестче она будет. Сегодня готовим печень По-строгановски.",
//         "ingredients":["Печень говяжья — 700 г","Помидор — 2 шт.","Лук репчатый — 1 шт.","Мука — 2 ст. л.","Сметана — 2 ст. л.","Зелень укропа — 30 г","Масло растительное — 2 ст. л.","Сушеный базилик — 1 ч. л.","Соль — 1,5 ч. л.","Черный молотый перец — по вкусу"],
//         "time":"25 мин.",
//         "calories":"400 кКал",
//         "howToMake":["Для приготовления Бефстроганов из говяжьей печени подготовим основной продукт. Печень вымыть и очистить от пленок. Нарезать небольшими кусочками. Я сначала порезал печень, а потом очищал от пленок.","Помидор обдать кипятком и снять кожицу, нарезать кусочками среднего размера. Репчатый лук нарезать четверть кольцами.","В сковороду влить растительное масло и обжарить печень на сильном огне 5-7 минут, помешивая.","Добавить помидоры и репчатый лук, убавить огонь до среднего и готовит помешивая еще 5 минут до образования сока.","Поверх мяса равномерным слоем всыпать 2 столовые ложки муки и выложить 2 ложки сметаны.","Перемешать содержимое сковороды, получится примерно как у меня на фото. Добавить 1,5 чайные ложки соли, приправить черным молотым перцем (по вкусу), также я предпочитаю добавлять базилик. Еще раз перемешать.","Влить 1-1,5 стакана воды. Еще раз помешать, накрыть крышкой и оставить томиться на маленько огне примерно 10 минут.","В самом конце тушеную говяжью печень присыпаем мелко нарубленной зеленью укропа.","Подавать печень По-строгановски можно с различными гарнирами, у меня с картофелем и соленьями. А еще очень вкусно в качестве гарнира подавать гречку и выкладывать тушеную печень и подливку поверх нее.","И еще одно фото бефстроганова из печени. Приятного аппетита!"],
//         "picture":"https://www.iamcook.ru/showrecipe/814"
//     }]

const FavoritesPage = () => {
  const [data, setData] = useState(null);
  const [option, setOption] = useState("all");
  const [input, setInput] = useState("");

  // useEffect(() => {

  // }, [input])

  console.log(option);
  console.log(input);
  return (
    <div>
      <h1>Favorite</h1>
      <div className="filter">
        <SelectOption handleChange={(val) => setOption(val)} />
        <Input handleValue={(val) => setInput(val)} />
      </div>
      <div>{data && <Card data={data} />}</div>
    </div>
  );
};

export default FavoritesPage;