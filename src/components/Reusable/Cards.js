export default function Cards() {
  return (
    <div class="card" style="width: 18rem;">
      <img src={Item} class="card-img-top" alt="..." />
      <div class="card-body">
        <div>
          <h5 class="card-title">{title}</h5>
          <h4>{price}</h4>
        </div>
      </div>
    </div>
  );
}
