import { css } from 'lit';

export const styles = css`
  .container {
    border: solid 1px #000;
    display: inlineblock;
    background-color: #ddd;
    border-radius: 5px;
  }

  .btn {
    height: 35px;
    width: 150px;
    border-radius: 4px;
    text-transform: uppercase;
    background-color: transparent;
    color: #fff;
    font-size: 15px;
    overflow: hidden;
    transition: all 500ms ease;
    margin-bottom: 10px;
    margin-top: 5px;
    margin-left: 10px;
    z-index: 0;
    font-weight: 700;
    cursor: pointer;
  }

  .btn::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    background-color: #20e2d7;
    transition: all 500ms ease;
    z-index: -1;
  }

  .btn:hover {
    background-color: #fff;
    box-shadow: 0 0 10px #20e2d7, 0 0 20px #20e2d7, 0 0 20px #20e2d7;
    color: #434343;
  }

  .update {
    background-color: #0f5;
    border: 2px solid #0f5;
  }

  .delete {
    background-color: #f00;
    border: 2px solid #f00;
  }

  h2 {
    font-size: 80px;
  }

  ul {
    list-style-type: none;
    margin-top: 10px;
    padding: 0;
  }

  .inp {
    border: none;
    background: none;
    color: #fff;
    padding-top: 20px;
    border: none;
    outline: 0px;
    font-size: 20px;
    border-bottom: 2px solid #333;
  }

  .task-list {
    background: #ddd;
    border: none;
    font-size: 20px;
    color: #000;
  }
`;
