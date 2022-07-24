function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Leo',
  sobrenome: 'Zabotto',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Leo', 'Zabotto');
pessoa.exibirNome();

export { pessoa };
