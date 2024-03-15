import {Button} from "@mui/material"
import {Link} from "react-router-dom"
import "./index.css"

export default function NotFound() {
    return <div id="notfound">
    <div className="notfound">
        <div className="notfound-404">
            <h3>Ooops!</h3>
            <h1>
                <span>4</span>
                <span>0</span>
                <span>4</span>
            </h1>
                
        </div>
        <h2>Not Found</h2>
        <Button variant="contained">
        <Link to ="/">Back Home</Link>
        </Button>
    </div>
</div>
    
}
