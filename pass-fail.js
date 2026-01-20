
deleteEvent(id) {
  if (confirm('Are you sure you want to delete this event?')) {
    this.$http.delete('/api/events/' + id)
      .success(() => {
        const index = this.events.findIndex(x => x.id === id);
        if (index !== -1) this.events.splice(index, 1);
      })
      .error(err => console.log(err));
  }
}
