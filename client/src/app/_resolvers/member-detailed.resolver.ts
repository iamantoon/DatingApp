import { ResolveFn } from '@angular/router';
import { Member } from '../_models/member';
import { inject } from '@angular/core';
import { MembersService } from '../_services/members.service';

export const memberDetailedResolver: ResolveFn<Member | null> = (route, state) => {
  const memberService = inject(MembersService);

  const username = route.paramMap.get('username');

  if (!username) return null;

  // When we're inside the context of a router function like this
  // Then this is going to automatically subscribe and unsubscribe
  // For many observables inside this resolver 
  return memberService.getMember(username);
};
