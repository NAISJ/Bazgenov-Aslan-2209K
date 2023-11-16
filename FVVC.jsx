import React, { Component } from 'react';

class Student extends Component {
  constructor(props) {
    super(props);

    // Установка начального состояния
    this.state = {
      age: this.props.age,
    };
  }

  // Функция для изменения состояния при нажатии на кнопку
  handleClick = () => {
    // Изменение состояния возраста на 1 при каждом нажатии
    this.setState({ age: this.state.age + 1 });
  };

  render() {
    return (
      <div>
        {/* Вывод ФИО и возраста из props */}
        <p>Мои ФИО: {this.props.lastName} {this.props.firstName} {this.props.patronymic}</p>
        <p>Возраст: {this.state.age} лет</p>

        {/* Кнопка для изменения состояния */}
        <button onClick={this.handleClick}>Увеличить возраст</button>
      </div>
    );
  }
}

// Передача данных через props
const lastName = "Bazgenov";
const firstName = "Aslan";
const patronymic = "Nurlanuli";
const age = 16;

// Рендер компонента с передачей данных через props
ReactDOM.render(
  <Student lastName={lastName} firstName={firstName} patronymic={patronymic} age={age} />,
  document.getElementById('root')
);