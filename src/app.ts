import express, {Application, Request, Response, NextFunction} from 'express';

import { productRouter } from './routes/product'
import { connect } from './schemas/index';

const port = 8080; 

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB
connect();

// APIs
app.use("/api/product", [productRouter]);
app.get('/', (req, res) =>{
  res.send('질럿질럿질럿')
});



app.listen(port, (): void => {
  console.log("Server is running");
});

// 굳이 모든 타입을 명시해 줄 필요가 없다.
// 자동으로 사용되는 인자 값들, 바로 뒤에 값이 적용되는 경우는 바로 타입이 명시되기 때문이다.