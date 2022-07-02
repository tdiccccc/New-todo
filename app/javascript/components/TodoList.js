import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios' //http通信を行うライブラリ
import styled from 'styled-components'
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im'
import { AiFillEdit } from 'react-icons/ai'

//検索窓とremoveAllをwrapする
const SearchAndButtton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
//inputタグ
const SearchForm = styled.input`
  font-size: 20px;
  width: 100%;
  height: 40px;
  margin: 10px 0;
  padding: 10px;
`
//すべてを削除するボタンのcss
const RemoveAllButton = styled.button`
  width: 16%;
  height: 40px;
  background: #f54242;
  border: none;
  font-weight: 500;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
`

const TodoName = styled.span`
  font-size: 27px;
  ${({ is_completed }) => is_completed && `
    opacity: 0.4;
  `}
`
//Row = htmlのタグの想定
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 7px auto;
  padding: 10px;
  font-size: 25px;
`

const CheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  color: green;
  cursor: pointer;
`

const UncheckedBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0 7px;
  cursor: pointer;
`

const EditButton = styled.span`
  display: flex;
  align-items: center;
  margin: 0 7px;
`

function TodoList() {
  const [Todos, setTodos] = useState([]) //初期値は空
  const [searhName, setSearchName] = useState('') //空の文字列

  useEffect(() => {
    axios.get('/api/v1/todos.json')//todos_controllerにアクセス
      .then(resp => {
        console.log(resp.data)
        setTodos(resp.data)
      })
      .catch(e => { //条件分岐
        console.log(e);
      })
  }, [])//第二引数に空の引数を渡す

  return (
    <div>TodoList</div>
  )
}

export default TodoList 