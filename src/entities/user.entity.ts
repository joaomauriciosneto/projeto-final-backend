import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NoteEntity } from "./note.entity";

@Entity({name: 'users'})
export class UserEntity {

  @PrimaryGeneratedColumn()
  idUser: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => NoteEntity, note => note.user)
  note: NoteEntity[];

}