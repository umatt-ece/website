<script setup lang="ts">
import { ref } from 'vue'
import { generic, about } from '@/assets/strings'
import Card from 'primevue/card'
import Panel from 'primevue/panel'
import Tabs from 'primevue/tabs'
import TabList from 'primevue/tablist'
import Tab from 'primevue/tab'
import TabPanels from 'primevue/tabpanels'
import TabPanel from 'primevue/tabpanel'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'

// Membership form values
const studentName = ref(null)
const studentEmail = ref(null)
const studentDegree = ref(null)
const studentYear = ref(null)

// Sponsorship form values
const sponsorCompany = ref(null)
const sponsorAddress = ref(null)
const sponsorContact = ref(null)
const sponsorEmail = ref(null)
const sponsorshipType = ref(null)

function submitMembershipForm() {
  console.log('submitting membership form...')
  // todo: send email to 'umattinfo@gmail.com'
}

function submitSponsorshipForm() {
  console.log('submitting sponsorship form...')
  // todo: send email to 'umattinfo@gmail.com'
}

</script>

<template>
  <div class="layout">
    <div class="card">
      <Card>
        <template #content>
          <!-- Introduction -->
          <h1>
            {{ about.team.title }}
          </h1>
          <div>
            <p>
              {{ about.team.content1 }}
            </p>
            <p>
              {{ about.team.content2 }}
            </p>
            <p>
              {{ about.team.content3 }}
            </p>
          </div>
          <br>
          <!-- Competition Panel -->
          <Panel :header="about.competition.title" toggleable collapsed>
            <p>
              {{ about.competition.content }}
            </p>
            <Tabs value="0">
              <TabList>
                <Tab value="0">{{ about.competition.design.title }}</Tab>
                <Tab value="1">{{ about.competition.manufacturing.title }}</Tab>
                <Tab value="2">{{ about.competition.marketing.title }}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel value="0">
                  <p>
                    {{ about.competition.design.content }}
                  </p>
                  <img src="/src/assets/images/competition-group-photo-2024.jpg" alt="" class="panel-image" />
                </TabPanel>
                <TabPanel value="1">
                  <p>
                    {{ about.competition.manufacturing.content }}
                  </p>
                  <img src="/src/assets/images/competition-group-photo-2024.jpg" alt="" class="panel-image" />
                </TabPanel>
                <TabPanel value="2">
                  <p>
                    {{ about.competition.marketing.content }}
                  </p>
                  <img src="/src/assets/images/competition-group-photo-2024.jpg" alt="" class="panel-image" />
                </TabPanel>
              </TabPanels>
            </Tabs>
            <Button as="a" target="_blank" severity="secondary"
                    :label="about.competition.website.label"
                    :href="about.competition.website.url" />
          </Panel>
          <br>
          <!-- Members Panel -->
          <Panel :header="about.members.title" toggleable collapsed>
            <p>
              {{ about.members.content }}
            </p>
            <p>
              {{ about.members.council }}
            </p>
            <div class="member-grid">
              <Card class="vertical-buffer-1 member-card">
                <template #content>
                  <div class="inline">
                    <img src="/src/assets/images/headshot-kam.png" alt="..." class="avatar" />
                    <div>
                      <h2>
                        {{ generic.councilMembers.captain.title }}
                      </h2>
                      <p>
                        {{ generic.councilMembers.captain.name }}
                      </p>
                    </div>
                  </div>
                </template>
              </Card>
              <Card class="vertical-buffer-1 member-card">
                <template #content>
                  <div class="inline">
                    <img src="/src/assets/images/logo.png" alt="..." class="avatar" />
                    <div>
                      <h2>
                        {{ generic.councilMembers.treasurer.title }}
                      </h2>
                      <p>
                        {{ generic.councilMembers.treasurer.name }}
                      </p>
                    </div>
                  </div>
                </template>
              </Card>
              <Card class="vertical-buffer-1 member-card">
                <template #content>
                  <div class="inline">
                    <img src="/src/assets/images/headshot-arik.png" alt="..." class="avatar" />
                    <div>
                      <h2>
                        {{ generic.councilMembers.mechanicalLead.title }}
                      </h2>
                      <p>
                        {{ generic.councilMembers.mechanicalLead.name }}
                      </p>
                    </div>
                  </div>
                </template>
              </Card>
              <Card class="vertical-buffer-1 member-card">
                <template #content>
                  <div class="inline">
                    <img src="/src/assets/images/headshot-zach.png" alt="..." class="avatar" />
                    <div>
                      <h2>
                        {{ generic.councilMembers.electricalLead.title }}
                      </h2>
                      <p>
                        {{ generic.councilMembers.electricalLead.name }}
                      </p>
                    </div>
                  </div>
                </template>
              </Card>
            </div>
            <p>
              {{ about.members.advisor }}
            </p>
            <Card class="vertical-buffer-1 member-card">
              <template #content>
                <div class="inline">
                  <img src="/src/assets/images/headshot-petkau.png" alt="..." class="avatar" />
                  <div>
                    <h2>
                      Faculty Advisor
                    </h2>
                    <p>
                      Don Petkau
                    </p>
                  </div>
                </div>
              </template>
            </Card>
            <p>
              {{ about.members.sponsors }}
            </p>
          </Panel>
          <br>
          <!-- Membership Panel -->
          <Panel :header="about.membership.title" toggleable collapsed>
            <p>
              {{ about.membership.content }}
            </p>
            <br>
            <FloatLabel>
              <InputText id="student-name" v-model="studentName" />
              <label for="student-name">{{ about.membership.form.name }}</label>
            </FloatLabel>
            <br>
            <FloatLabel>
              <InputText id="student-email" v-model="studentEmail" />
              <label for="student-email">{{ about.membership.form.email }}</label>
            </FloatLabel>
            <br>
            <FloatLabel>
              <InputText id="student-degree" v-model="studentDegree" />
              <label for="student-degree">{{ about.membership.form.degree }}</label>
            </FloatLabel>
            <br>
            <FloatLabel>
              <InputText id="student-year" v-model="studentYear" />
              <label for="student-year">{{ about.membership.form.year }}</label>
            </FloatLabel>
            <br>
            <Button :label="generic.form.submit" class="offset" @click="submitMembershipForm" />
          </Panel>
          <br>
          <!-- Sponsorship Panel -->
          <Panel :header="about.sponsorship.title" toggleable collapsed>
            <p>
              {{ about.sponsorship.content }}
            </p>
            <br>
            <FloatLabel>
              <InputText id="sponsor-company" v-model="sponsorCompany" />
              <label for="sponsor-company">{{ about.sponsorship.form.company }}</label>
            </FloatLabel>
            <br>
            <FloatLabel>
              <InputText id="sponsor-address" v-model="sponsorAddress" />
              <label for="sponsor-address">{{ about.sponsorship.form.address }}</label>
            </FloatLabel>
            <br>
            <FloatLabel>
              <InputText id="sponsor-contact" v-model="sponsorContact" />
              <label for="sponsor-contact">{{ about.sponsorship.form.contact }}</label>
            </FloatLabel>
            <br>
            <FloatLabel>
              <InputText id="sponsor-email" v-model="sponsorEmail" />
              <label for="sponsor-email">{{ about.sponsorship.form.email }}</label>
            </FloatLabel>
            <br>
            <div>
              todo: sponsorship type
            </div>
            <Button :label="generic.form.submit" class="offset" @click="submitSponsorshipForm" />
          </Panel>
          <br>
        </template>
      </Card>
    </div>
  </div>
</template>

<style scoped>
.layout{
  position:relative;
  z-index: 0;
  top:4rem;
}
.inline {
  display: flex;
  flex-direction: row;
}

.avatar {
  width: 120px;
  height: 120px;
  margin: 0 1rem;
  border-radius: 50%;
}

.member-card {
  display: inline-block;
  width: 50%;
}

.vertical-buffer-1 {
  margin: 1rem 0;
}

.panel-image {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 10px;
}
</style>