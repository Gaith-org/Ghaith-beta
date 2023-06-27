import{ Link } from 'react-router-dom'
import '../styles/404.css'
const Error = () => {
    return ( 
       <>
<body>

	<div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>404</h1>
			</div>
			<h2>Oops! Nothing was found</h2>
			<p>The page you are looking for might not exists or had its name changed or is temporarily unavailable. <br></br><Link to="/">Return to homepage</Link></p>
		</div>
	</div>

</body>
</>
/* <!-- This templates was made by Colorlib (https://colorlib.com) --> */
     );
}
 
export default Error;