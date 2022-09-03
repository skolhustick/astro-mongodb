<script>
  const onSubmit = async (e) => {
    const formData = new FormData(e.target);
    const data = {};
    for (let field of formData) {
      const [key, value] = field;
      data[key] = value;
    }
    try {
      await fetch("/api/users", {
        method: "POST",
        body: JSON.stringify(data),
      });
      window.location.replace("/users");
    } catch (error) {
      alert("Oops. We failed.");
    }
  };
</script>

<form on:submit|preventDefault={onSubmit}>
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <input type="integer" name="age" required />
  <button type="submit">Submit</button>
</form>
