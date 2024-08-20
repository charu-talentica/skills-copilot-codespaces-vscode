function skillsMember() {
  const member = {
    name: 'John',
    age: 30,
    skills: ['JavaScript', 'HTML', 'CSS'],
    // Method
    getSkills: function() {
      return this.skills;
    }
  }
  return member;
}