import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()
	const [ser,setUser]= useState ("William")

	const createAgenda = ()=> {
		let options={
			method:"POST",
			headers:{"content-type" : "applications/JSON"},
			body: JSON.stringify({

			})
		}
	}

  useEffect (
	()=>{
		fetch(store.baseUrl + "agendas")
		.then((resp)=>resp.json())
		.then((data)=>console.log("data:", data))
	},[]
  )

	return (
		<div className="text-center mt-5">
			<h1>Hello Rigo!!</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>

			<Link to = "Test"> Go to Test</Link>

			<button  style={{
    						padding: "20px 40px", 
    						fontSize: "18px",      

  							}}

  					onClick={()=>{
							dispatch({
								
							type:"set-fName", 
							payload: "Alex"
							})
							}}>{store.fName}</button>

			<button  style={{

    						padding: "20px 40px",  
    						fontSize: "18px",      
  							}}

  					onClick = {()=> {
							dispatch ({

							type:"set-lName",
							payload: "Ayala"
							})
							}}>{store.lName}</button>

		</div>
	);
}; 