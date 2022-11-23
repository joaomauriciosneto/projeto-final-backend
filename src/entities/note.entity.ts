import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity({name: 'note'})
export class NoteEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  saveNote: boolean = false;

  @ManyToOne(() => UserEntity, user => user.note)
  @JoinColumn({name: 'id_user'})
  user: UserEntity;

}