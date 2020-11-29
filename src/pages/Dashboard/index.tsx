import React, { useCallback, useState } from 'react';
import { addDays } from 'date-fns';
import DayPicker, { DayModifiers } from 'react-day-picker';
import { FiClock, FiPower } from 'react-icons/fi';

import 'react-day-picker/lib/style.css';

import logoImg from '../../assets/logo.svg';
import { useAuth } from '../../hooks/auth';
import {
  Container,
  Header,
  HeaderContent,
  Profile,
  Content,
  Schedule,
  Calendar,
  NextAppointment,
  Section,
  Appointment,
} from './styles';

function getTodayOrNextBusinessDay() {
  const today = new Date();
  if (today.getDay() === 0) return addDays(today, 1);
  if (today.getDay() === 6) return addDays(today, 2);

  return today;
}

const Dashboard: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(getTodayOrNextBusinessDay());

  const { signOut, user } = useAuth();

  const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
    if (modifiers.available) {
      setSelectedDate(day);
    }
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={logoImg} alt="GoBarber" />
          <Profile>
            <img src={user.avatar_url} alt={user.name} />
            <div>
              <span>Bem-vindo,</span>
              <strong>{user.name}</strong>
            </div>
          </Profile>
          <button type="button" onClick={signOut}>
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
      <Content>
        <Schedule>
          <h1>Horários agendados</h1>
          <p>
            <span>Hoje</span>
            <span>Dia 06</span>
            <span>Segunda-feira</span>
          </p>
          <NextAppointment>
            <strong>Atendimento a seguir</strong>
            <div>
              <img
                src="https://avatars3.githubusercontent.com/u/51419725?s=460&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
                alt="Anderson Santos"
              />
              <strong>Anderson Santos</strong>
              <span>
                <FiClock />
                08:00
              </span>
            </div>
          </NextAppointment>
          <Section>
            <strong>Manhã</strong>
            <Appointment>
              <span>
                <FiClock />
                09:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/51419725?s=460&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
                  alt="Anderson Santos"
                />
                <strong>Anderson Santos</strong>
              </div>
            </Appointment>
            <Appointment>
              <span>
                <FiClock />
                10:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/51419725?s=460&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
                  alt="Anderson Santos"
                />
                <strong>Anderson Santos</strong>
              </div>
            </Appointment>
          </Section>
          <Section>
            <strong>Tarde</strong>
            <Appointment>
              <span>
                <FiClock />
                13:00
              </span>
              <div>
                <img
                  src="https://avatars3.githubusercontent.com/u/51419725?s=460&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
                  alt="Anderson Santos"
                />
                <strong>Anderson Santos</strong>
              </div>
            </Appointment>
          </Section>
        </Schedule>
        <Calendar>
          <DayPicker
            weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']}
            fromMonth={new Date()}
            disabledDays={[{ daysOfWeek: [0, 6] }]}
            modifiers={{ available: { daysOfWeek: [1, 2, 3, 4, 5] } }}
            onDayClick={handleDateChange}
            selectedDays={selectedDate}
            months={[
              'Janeiro',
              'Fevereiro',
              'Março',
              'Abril',
              'Maio',
              'Junho',
              'Julho',
              'Agosto',
              'Setembro',
              'Outubro',
              'Novembro',
              'Dezembro',
            ]}
          />
        </Calendar>
      </Content>
    </Container>
  );
};

export default Dashboard;
