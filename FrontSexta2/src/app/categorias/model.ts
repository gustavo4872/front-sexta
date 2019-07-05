export class Evento{
  id: number;
  nome: string;
}

export class Categoria{
  id: number;
  nome: string;
  evento = new Evento();
}
