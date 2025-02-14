import { useState, useRef } from "react";

function OrderEditor(){
    const [input, setInput] = useState({
        menu:"",
        address:"",
        request:"",
    })
    const inputRef = useRef();

    function onChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }

    function onSubmit(){
      if(input.address === ""){
        inputRef.current.focus();
        return
      }
      alert(`주문이 완료되었습니다 
          메뉴 : ${input.menu}
          주소 : ${input.address} 
          요청사항: ${input.request}`)
    }

    return (
        <div
          style={{ display: "flex", flexDirection: "column", gap: 10 }}
        >
          <h2>배달의민족 주문</h2>
          <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              메뉴 선택
            </div>
            <select
                style={{ width: 300, padding: 5 }}
                name="menu"
                onChange={onChange}
                value={input.menu}>
                <option value={"족발"}>족발</option>
                <option value={"떡볶이"}>떡볶이</option>
                <option value={"아이스크림"}>아이스크림</option>
                <option value={"샐러드"}>샐러드</option>
            </select>
          </div>
          <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              배달 주소
            </div>
            <input
              ref={inputRef}
              style={{ width: 300, padding: 5 }}
              placeholder="주소) 서울특별시 xx동 .."
              name="address"
              onChange={onChange}
              value={input.address}
            />
          </div>
          <div>
            <div style={{ marginBottom: 5, fontSize: 14 }}>
              배달 요청사항
            </div>
            <textarea
              style={{ width: 300, padding: 5 }}
              placeholder="배달 요청사항을 써 주세요..."
              name="request"
              onChange={onChange}
              value={input.request}
            />
          </div>
          <div>
            <button
              onClick={onSubmit}
              style={{ width: 300, padding: 5 }}
            >
              주문 완료
            </button>
          </div>
        </div>
      );
}

export default OrderEditor;