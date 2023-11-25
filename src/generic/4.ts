/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

class Component<T> {
  constructor(public props: T) {
    this.props;
  }
}

class Page extends Component<{ title: string }> {

  pageInfo(): void {

    console.log(this.props.title);
  }
}

export { };