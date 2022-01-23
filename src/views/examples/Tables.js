
import {
  Card,
  CardHeader,
  Table,
  Container,
  Row,
 
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { data } from "jquery";

const Tables = () => {
  const [test, setTest] = useState("");

  const fetchData = () => {
    return axios
      .get("https://run.mocky.io/v3/8260aa5d-8af8-4cff-999e-6e81b217f0ba")
      .then((res) => setTest(res.data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table>
              <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Company</th>
              </tr>
              </thead>
              <tbody>
                  
                  {test.clients.map((data)=>
      <tr>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.company}</td>
      </tr>
    )}
              
              
                
    
                
              </tbody>
              
              
               
              
                
              
              
             
                
              </Table>

              
              
            </Card>
          </div>
        </Row>
        {/* Dark table */}
        
      </Container>
    </>
  );
};

export default Tables;
