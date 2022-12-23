function App() {
	return (
		<>
			<h1>HELLO WORLD</h1>
			<div>hello</div>
		</>
	);
}

export default App;

/*
리액트는 js를 기본으로 한다 => jsx문법
1. html문법안에 자바스크립트 문법을 쓸때는 중괄호 안에 넣어야한다.
ex) <div className="login" onClick={()=>{}}></div>
원래는 onClick=(()=>{}) 로 그냥 괄호로 화살표 함수 감쌌었음

2. html 문법의 class를 className으로 고쳐야한다. 기본 js이기때문에 js에서는 class 예약어이므로 쓸 수 없다

3. jsx문법에서는 모든 태그가 스스로 닫을 수 있다
ex. <div></div> => <div /> 가능

4. fragment 모든 요소를 감싸는 최상위 요소
=> js 문법에서는 return은 오직 하나의 인수만 반환이 가능합니다. 따라서 2개 이상의 값을 반환하려면 return이 하나의 태그로 인식하도록 감싸는 태그가 필요한데 의미없는 태그로 감싸면 안되므로 fragment를 사용해서 모든 요소를 감싸준다.



*/
