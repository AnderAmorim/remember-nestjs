import { Module } from '@nestjs/common';
import { JogadoresModule } from './jogadores/jogadores.module';
import { MongooseModule } from '@nestjs/mongoose';

const urlConnect =
  'mongodb+srv://Anderson:78789378@cluster0.a4u6y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const parameters = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://admin:123@cluster0.a4u6y.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    ),
    JogadoresModule,
  ],
})
export class AppModule {}
