if (ARGS.firstname && ARGS.lastname) {
  setResponse(new HttpResponse(200, `Hello ${ARGS.firstname} ${ARGS.lastname}!`, 'text/plain'));
} else {
  setResponse(new HttpResponse(400, 'Hello stranger!', 'text/plain'));
}
