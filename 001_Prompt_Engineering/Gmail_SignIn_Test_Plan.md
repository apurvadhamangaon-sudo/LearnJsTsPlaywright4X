# Gmail Sign-In Test Plan

## 1. Test Plan ID and Title

| Field | Value |
| --- | --- |
| Test Plan ID | TP-GMAIL-SIGNIN-001 |
| Title | Gmail Sign-In Functional Test Plan |
| Version | 0.1 |
| Status | Draft for review |
| Date | 2026-10-02 |

## 2. Objective and References

**Objective:** Define a focused test approach for Gmail's own sign-in page, covering one successful sign-in scenario and one unsuccessful sign-in/password-validation scenario.

**References:**
- User-provided scope: Gmail sign-in; valid and invalid credentials; exactly two top-level scenarios, one positive and one negative.
- Reusable QA framework: [04_RICE_POT_Generic_QA_Template.md](04_RICE_POT_Generic_QA_Template.md), Test Plan profile.

No external requirements, acceptance criteria, or Google test-environment documentation were supplied or independently verified. This document is a plan, not evidence that tests have been executed.

## 3. In Scope and Out of Scope

**In scope**
- Gmail web sign-in using an authorized test account.
- One positive scenario using valid credentials.
- One negative scenario using invalid credentials, focused on password rejection and any password-field validation requirements confirmed by the owner.
- Confirming that unsuccessful attempts do not establish an authenticated session.

**Out of scope**
- Account registration, password creation or reset, recovery flows, mailbox functionality, and Gmail integrations in another application.
- Security penetration, load, and performance testing.
- Additional top-level test cases or password-policy rules that have not been supplied.

The requested phrase “all password validations” needs clarification. This plan does not invent password length, complexity, or boundary rules. The negative scenario will cover invalid-password rejection; blank-input or other field validations require confirmed expected behavior before they can be asserted.

## 4. Requirements and Planned Coverage

The following local IDs are proposed for traceability because no external requirement IDs were provided.

| Local requirement | Planned scenario | Coverage and expected result | Priority |
| --- | --- | --- | --- |
| REQ-LOCAL-01: Authorized user can sign in with valid credentials | TC-GMAIL-01 Positive sign-in | Submit valid credentials for an authorized test account; confirm sign-in succeeds and the expected authenticated landing state is reached. Exact post-login state depends on account and MFA configuration. | High, proposed |
| REQ-LOCAL-02: Invalid credentials cannot sign in | TC-GMAIL-02 Negative sign-in and password validation | Submit an incorrect password for an authorized test account; confirm sign-in is rejected, no authenticated session is established, and the observed validation feedback is recorded. Do not assert undocumented exact message text. | High, proposed |

These are the only two top-level scenarios. Blank-password and other password-field checks are not counted as covered until their expected behavior is confirmed; they must not be silently added as separate cases.

## 5. Test Approach, Levels, and Types

- **Approach:** Black-box functional testing of the Gmail sign-in user interface.
- **Test level:** End-to-end user-flow validation at the UI boundary.
- **Test types:** Positive authentication and negative credential/password validation.
- **Execution method:** Manual browser execution is proposed because the user did not select an automation method. Browser automation is not authorized or assumed by this plan.
- **Scenario count:** Exactly two top-level scenarios as listed in Section 4.
- **Evidence:** Record the browser, timestamp, scenario ID, result, and non-sensitive screenshot or observation where permitted. Never capture or store passwords, recovery codes, or session tokens.

## 6. Environment, Tools, Access, and Test Data

| Item | Plan |
| --- | --- |
| System under test | Gmail's own web sign-in page |
| Environment | Not provided. Use only an environment and account authorized by the account owner; confirm whether testing against the live service is permitted before execution. |
| Browser and version | Not provided; select and record before execution. |
| Operating system/device | Not provided; select and record before execution. |
| Tools | Browser and an approved secure method for supplying test credentials. No test-management or defect-tracking tool was specified. |
| Positive test data | A valid, owner-authorized test account. Credentials are supplied and handled outside this document. |
| Negative test data | The same authorized test account identifier with an intentionally incorrect password. Do not use repeated attempts. |
| MFA/CAPTCHA | Account configuration and service challenges are not provided. Resolve these with the account owner; do not attempt to bypass them. |

Do not put real credentials, personal account details, recovery codes, or secrets in this plan, source control, screenshots, or defect reports.

## 7. Entry and Exit Criteria

**Entry criteria**
- The account owner authorizes the test scope and confirms the permitted environment.
- An authorized test account is available, and the account owner confirms how MFA or other sign-in challenges should be handled.
- Browser/device and expected success state are recorded.
- Expected behavior for the requested password validations is confirmed, or unconfirmed checks are explicitly excluded from pass/fail assessment.
- No real credential is written into the plan or test evidence.

**Exit criteria**
- Both approved top-level scenarios have an execution status and recorded actual result.
- The positive scenario reaches its agreed authenticated state; the negative scenario is rejected without creating an authenticated session.
- Any deviations are recorded as defects or observations, with severity and priority marked proposed until agreed.
- No unresolved blocking issue remains for the agreed scope, or the test owner accepts the documented risk. The meaning of “blocking” must be agreed before execution.

These criteria are proposed and require owner approval. Passing this two-scenario plan does not establish comprehensive Gmail coverage.

## 8. Roles, Responsibilities, Estimates, and Schedule

| Role | Responsibility | Owner / estimate |
| --- | --- | --- |
| Test owner | Confirm authorization, expected outcomes, account setup, and password-validation requirements | Not provided |
| Tester | Execute the two approved scenarios and record results without exposing secrets | Not provided |
| Approver | Review results and accept or reject residual risk | Not provided |

Schedule, effort, named owners, and reporting cadence are not provided and must be agreed before execution.

## 9. Defect Management and Reporting

- Record each observed failure with scenario ID, timestamp, browser/device, reproducible steps, expected result, actual result, and non-sensitive evidence.
- Do not include passwords, recovery information, personal data, or authentication tokens in defect reports.
- Use the team's approved defect tracker; none was specified. If severity or priority is not defined, label it proposed and ask the test owner to confirm.
- Report execution status and open defects to the test owner after the two scenarios are completed. Reporting cadence is not provided.

## 10. Risks, Dependencies, Assumptions, and Open Questions

**Risks and dependencies**
- Live Gmail sign-in may invoke MFA, CAPTCHA, rate limits, or account-protection measures that block or alter execution.
- Repeated invalid attempts may lock or challenge an account; use a designated test account and a single planned negative attempt unless the owner approves otherwise.
- Service behavior and error messages may change; verify current expected behavior during test review rather than relying on undocumented text.
- Testing depends on account-owner authorization, working test credentials, network access, and the agreed MFA process.

**Assumptions**
- “Gmail” means Google's own web sign-in page, not an application that integrates with Gmail.
- Exactly two top-level scenarios are required: one positive and one negative.
- Manual execution is a proposal only; the execution method remains unconfirmed.
- Credentials will be provided and handled securely by the account owner and will not be included in this file.

**Open questions**
- Which browser, version, operating system, and environment are approved?
- What does “all password validations” mean for this sign-in scope: incorrect password only, blank password, or other specified input rules? Provide expected outcomes without sharing credentials.
- Is the live Gmail service approved for this testing, and how should MFA be handled?
- Who owns test execution, defect triage, and final approval, and what schedule applies?

## 11. Suspension and Resumption Criteria

**Suspend testing if:** authorization is unclear or withdrawn; an unexpected account lock, security challenge, or CAPTCHA occurs; the test account appears to be a personal or production-critical account; credentials or sensitive data are exposed; or service behavior could be affected beyond the approved attempt.

**Resume only when:** the account owner confirms authorization and account status, the test data and MFA process are safe to use, any exposed secrets have been handled through the approved incident process, and the test owner approves continuing.

## 12. Test Deliverables and Approval

**Deliverables**
- This approved test plan.
- Execution record for TC-GMAIL-01 and TC-GMAIL-02, with status, actual results, and non-sensitive evidence.
- Defect or observation records and a concise completion summary.

**Approval required before execution:** Test owner approval of scope, environment, expected outcomes, password-validation coverage, and account/MFA handling.

| Approver | Name | Decision | Date |
| --- | --- | --- | --- |
| Test owner | Not provided | Pending | Not provided |